import { AddRounded, RemoveRounded } from "@mui/icons-material";
import { noop } from "lodash";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { selectors } from "../../store";
import {
    decrementProductCartQuantity,
    incrementProductCartQuantity,
    removeFromCart
} from "../../store/actions";
import "./cart-item.css";
function CartItem({
    name,
    imgSrc,
    itemId,
    increment = noop,
    decrement = noop,
    getPricePerProduct = noop,
    getQuantity = noop,
    remove = noop,
}) {
    useEffect(() => {
        if (getQuantity(itemId) < 1) {
            remove(itemId);
        }
    }, [getQuantity(itemId)]);

    return (
        <div className="card-itam">
            <div className="img-box">
                <img src={imgSrc} alt="" />
            </div>

            <div className="item-section">
                <h2 className="item-name">{name}</h2>
                <div className="itrem-quantity">
                    <span>x {getQuantity(itemId)} </span>
                    <div className="quantity">
                        <RemoveRounded
                            className="item-remove"
                            onClick={() => decrement(itemId)}
                        />
                        <AddRounded
                            className="item-add"
                            onClick={() => increment(itemId)}
                        />
                    </div>
                </div>
            </div>

            <p className="item-price">
                <span className="dolor-sign">$</span>
                <span className="item-price-value">
                    {getPricePerProduct(itemId)}
                </span>
            </p>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        getQuantity: selectors.getQuantity(state),
        getPricePerProduct: selectors.getPricePerProduct(state),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: incrementProductCartQuantity(dispatch),
        decrement: decrementProductCartQuantity(dispatch),
        remove: removeFromCart(dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
