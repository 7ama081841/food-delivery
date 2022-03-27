import { AddRounded, RemoveRounded } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { actionType } from "../reducer";
import { useStateValue } from "../StateProvider";
import "./cardItam.css";

export default function CardItam({ name, imgSrc, price, itemId }) {

    const [qty, setQty] = useState(1);
    const [{ cart }, dispatch] = useStateValue();
    const [itemPrice, setItemPrice] = useState(
        parseInt(qty) * parseFloat(price)
    );

    useEffect(() => {
        setItemPrice(parseInt(qty) * parseFloat(price));
    }, [qty]);

    const updateQty = (action, id) => {
        if (action === "add") {
            setQty(qty + 1);
            
        } else {
            if (qty === 1) {
                dispatch({
                    type: actionType.SET_CART,
                    cart: cart ? cart.filter((e) => e?.id !== id) : [],
                });
            }
            setQty(qty - 1);
        }
    };

    return (
        <div className="card-itam">
            <div className="img-box">
                <img src={imgSrc} alt="" />
            </div>

            <div className="item-section">
                <h2 className="item-name">{name}</h2>
                <div className="itrem-quantity">
                    <span>x {qty} </span>
                    <div className="quantity">
                        <RemoveRounded
                            className="item-remove"
                            onClick={() => updateQty("remove", itemId)}
                        />
                        <AddRounded
                            className="item-add"
                            onClick={() => updateQty("add", itemId)}
                        />
                    </div>
                </div>
            </div>

            <p className="item-price">
                <span className="dolor-sign">$</span>
                <span className="item-price-value">{itemPrice}</span>
            </p>
        </div>
    );
}
