// import { Button, Container, FormControl } from "@mui/material";
import { SearchRounded } from "@mui/icons-material";
import React from "react";
// import style
import "./header.css";
import ShoppingCartBtn from "./shopping-cart-btn";

export default function Header() {
    const toggleAclive = () => {
        const toggle = document.querySelector(".right-menu");
        toggle.classList.toggle("aclive");
    };

    return (
        <header>
            <nav>
                <img
                    src="https://i.pinimg.com/originals/82/be/d4/82bed479344270067e3d2171379949b3.png"
                    alt=""
                    className="logo"
                />
                <div className="input-Box">
                    <SearchRounded className="searchIcon" />
                    <input type="text" placeholder="search" />
                </div>
                <div className="profile-container">
                    <div className="image-box">
                        <img
                            src="https://scontent.ftun15-1.fna.fbcdn.net/v/t1.6435-9/70161508_2418655518372182_1458404304825090048_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=eApnecca55AAX-ZjXcH&_nc_ht=scontent.ftun15-1.fna&oh=00_AT_wYql3c2jutxd4jfDya6l4YeFCS3k80nbK2gsZvdqMRw&oe=623B8EA6"
                            alt=""
                            className="profile-pic"
                        />
                    </div>

                    <h2 className="userName"> userName </h2>
                </div>
                <ShoppingCartBtn
                    className="Shopping-Cart md:hidden sm:block"
                    onClick={toggleAclive}
                />
            </nav>
        </header>
    );
}
