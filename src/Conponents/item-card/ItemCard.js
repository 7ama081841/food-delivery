import { AddRounded, Favorite, StarRounded } from "@mui/icons-material";
import React, { useState } from "react";

import "./item card.css"

export default function ItemCard({ imgSrc, name, ratings, price }) {

    const [isfavorite , setIsfavorite] = useState(false)
    const [carantValue, setCarantValue] = useState(Math.floor(ratings));

    const handelClick = ( value ) => {
        setCarantValue(value)
    }

    return (
        <div className="item-Card">
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
                                (carantValue > i ? "orange" : "gray" )} `}
                                onClick={() => handelClick(i + 1)}
                            >
                                <StarRounded />
                            </i>
                        ))}
                        <h3 className="price">
                            <span>$ </span> {price}
                        </h3>
                    </div>
                    <i className="add-to-card">
                        <AddRounded />
                    </i>
                </div>
            </div>
        </div>
    );
}
