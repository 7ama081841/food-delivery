import { AddRounded, Favorite, StarRounded } from "@mui/icons-material";
import { noop } from "lodash";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../store/actions";
import "./item card.css";

function ItemCard({
    id,
    imgSrc,
    name,
    ratings,
    price,
    itemId,
    addToCart = noop,
}) {
    const [isfavorite, setIsfavorite] = useState(false);
    const [carantValue, setCarantValue] = useState(Math.floor(ratings));

    const [isCart, setCard] = useState(null);

    useEffect(() => {
        if (isCart) {
        }
    }, [isCart]);

    const handelClick = (value) => {
        setCarantValue(value);
    };

    return (
        <div className="item-Card" id={itemId}>
            <div
                className={`isfavorite ${isfavorite ? "active" : ""} `}
                onClick={() => setIsfavorite(!isfavorite)}
            >
                <Favorite />
            </div>

            <div className="img-box">
                <img src={imgSrc} alt="" />
            </div>
            <div className="item-content">
                <h3>{name}</h3>
                <div className="button">
                    <div className="ratings">
                        {Array.apply(null, { length: 5 }).map((e, i) => (
                            <i
                                key={i}
                                className={`rating ${
                                    carantValue > i ? "orange" : "gray"
                                } `}
                                onClick={() => handelClick(i + 1)}
                            >
                                <StarRounded />
                            </i>
                        ))}
                        <h3 className="price">
                            <span>$ </span> {price}
                        </h3>
                    </div>
                    <i
                        className="add-to-card"
                        onClick={() => addToCart({ pid: id, q: 1 })}
                    >
                        <AddRounded />
                    </i>
                </div>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: addToCart(dispatch),
    };
};

export default connect(null, mapDispatchToProps)(ItemCard);
