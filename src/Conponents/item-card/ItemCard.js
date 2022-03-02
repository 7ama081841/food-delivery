import { AddRounded, Favorite, StarRounded } from "@mui/icons-material";
import React from "react";

import "./item card.css"

export default function ItemCard({ imgSrc, name, ratings, price }) {
    return (
        <div className="item-Card">
            <div className="isfavorite">
                <Favorite />
            </div>

            <div className="img-box">
                <img src={imgSrc} alt="" />
            </div>
            <div className="item-content">
                <h3 >{name}</h3>
                <div className="button">
                    <div className="ratings">
                        {Array.apply(null, { length: 5 }).map((e, i) => (
                            <i key={i} className="rating">
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
