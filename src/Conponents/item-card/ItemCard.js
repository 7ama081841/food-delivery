import { AddRounded, Favorite, StarRounded } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Items } from "../data";

import "./item card.css";

export default function ItemCard({ imgSrc, name, ratings, price, itemId }) {
    const [isfavorite, setIsfavorite] = useState(false);
    const [carantValue, setCarantValue] = useState(Math.floor(ratings));
    
    const [isCard, setCard] = useState(null);
    
    useEffect(() => {
        if( isCard) {
            console.log(isCard)
        }
    }, [isCard]);

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
                        onClick={() =>
                            setCard(Items.find((el) => el.id === itemId))
                        }
                    >
                        <AddRounded />
                    </i>
                </div>
            </div>
        </div>
    );
}
