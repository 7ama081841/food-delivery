import React from "react";

// import style
import "./menuCard.css";

// import icons material
import { ChevronRightRounded } from "@mui/icons-material";

export default function MenuCard({ imgSrc, name, isactive }) {
    return (
        <div className={`row-menu-card ${isactive ?  "active" : "" } `}>
            <div className="img-box">
                <img src={imgSrc} alt="" />
            </div>
            <h3>{name}</h3>
            <i className="load-namu">
                <ChevronRightRounded />
            </i>
        </div>
    );
}
