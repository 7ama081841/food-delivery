import React from "react";
import { Link } from "react-router-dom";

export default function MenuContainer({ link, icon, isHome }) {
    return (
        <li className={isHome ? "active" : ""}>
            <Link to={link}>
                <span className="icon">{icon}</span>
            </Link>
        </li>
    );
}
