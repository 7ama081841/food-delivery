import { ShoppingCartRounded } from "@mui/icons-material";
import { connect } from "react-redux";
function ShoppingCartBtn({ itemsCount = 0, ...otherProps }) {
    return (
        <div {...otherProps}>
            <ShoppingCartRounded className="cart" />
            <div className="cart-content">
                <p>{itemsCount}</p>
            </div>
        </div>
    );
}

const mapSelectToProps = (state) => ({
    itemsCount: state.cart.length,
});

const matDispatchToProps = (dispatch) => ({});

export default connect(mapSelectToProps, matDispatchToProps)(ShoppingCartBtn);
