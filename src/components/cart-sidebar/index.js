import { filter, map } from "lodash";
import { connect } from "react-redux";
import CartItem from "../cart-item/CartItem";
import DebitCard from "../debit-card/DebitCard";
import SubMenuContainer from "../sub-menu-container/SubMenuContainer";
function CartSidebar({ isCart, total = 0, products = [] }) {
    return (
        <div className="right-menu z-0 fixed md:w-1/5 md:static md:right-0 md:z-0 sm:z-20">
            <div className="debit-card-container">
                <div className="debit-card">
                    <DebitCard />
                </div>
            </div>

            {!isCart ? (
                <div></div>
            ) : (
                <div className="card-checkout-container">
                    <div className="card-container">
                        <SubMenuContainer name="cart items" />

                        <div className="card-items">
                            {map(products, (item, key) => (
                                <CartItem
                                    key={key}
                                    name={item.name}
                                    imgSrc={item.imgSrc}
                                    price={item.price}
                                    itemId={item.id}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="total-section">
                        <h3>Total</h3>
                        <p>
                            <span>$</span>
                            {total}
                        </p>
                    </div>

                    <button className="check-out">Check Out</button>
                </div>
            )}
        </div>
    );
}

const getCartItems = (state) => {
    return filter(state.products.items, (product) =>
        state.cart.map((p) => p.pid).includes(product.id)
    );
};

const calculateTotal = (state) => {
    let total = 0;

    for (let item of state.cart) {
        const price = state.products.items[item.pid]?.price;

        total += price * item.q;
    }

    return total;
};

const mapStateToProps = (state) => {
    return {
        isCart: state.cart.length > 0,
        products: getCartItems(state),
        total: calculateTotal(state),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CartSidebar);
