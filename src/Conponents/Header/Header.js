import React from "react";
// import { Button, Container, FormControl } from "@mui/material";
import {
    SearchRounded,
    ShoppingCartRounded,
    BarChart,
} from "@mui/icons-material";

// import style
import "./header.css";

export default function Header() {
    const toggleAclive = () => {
        const toggle = document.querySelector(".right-menu");
        toggle.classList.toggle("active");
    };

    return (
        <header>
            <img
                src="https://i.pinimg.com/originals/82/be/d4/82bed479344270067e3d2171379949b3.png"
                alt=""
                className="logo"
            />

            <div className="input-Box">
                <SearchRounded className="searchIcon" />
                <input type="text" placeholder="search" />
            </div>

            <div className="Shopping-Cart">
                <ShoppingCartRounded className="cart" />
                {/*<div className="cart-content">
                    <p>2</p>
                </div>*/ }
            </div>

            <div className="profile-container">
                <div className="image-box">
                    <img
                        src="https://scontent.ftun15-1.fna.fbcdn.net/v/t1.6435-9/70161508_2418655518372182_1458404304825090048_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=qI_q5FfY6WsAX_Ozvjx&_nc_ht=scontent.ftun15-1.fna&oh=00_AT8OLYoMp7XJfXwLY7TEsrItD9vqQfd2V1IjI107w5IsqQ&oe=627ECB26"
                        alt=""
                        className="profile-pic"
                    />
                </div>

                <h2 className="userName"> userName </h2>
            </div>

            <div className="toggle-menu md:hidden sm:block">
                <BarChart className="toggle-icon " onClick={toggleAclive} />
            </div>
        </header>
    );
}
