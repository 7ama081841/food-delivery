// import styles
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import images
import image from "./images/take-out-biryani-pizza-chinese-cuisine-delivery-pizza-delivery-95393146bb30d5c8e45c2d168a63f28d.png";

// import icons material
import {
    AccountBalanceRounded,
    Chat,
    Favorite,
    HomeRounded,
    Settings,
    SummarizeRounded,
} from "@mui/icons-material";

// import Conponents
import Header from "./Conponents/Header/Header";
import MenuContainer from "./Conponents/menu container/MenuContainer";
import BannerName from "./Conponents/banner/BannerName";
import SubMenuContainer from "./Conponents/sub menu Container/SubMenuContainer";
import MenuCard from "./Conponents/menu card/MenuCard";
import ItemCard from "./Conponents/item-card/ItemCard";
import DebitCard from "./Conponents/debit card/DebitCard";
import CardItam from "./Conponents/card item/CardItam";

// import hocks
import { useEffect, useState } from "react";

// import data
import { MenuItems, Items } from "./Conponents/data";

function App() {
    // Main Dish Data
    const [isMainData, setIsMainData] = useState(
        Items.filter((el) => el.itemId === "buger01")
    );

    useEffect(() => {
        const menuLi = document.querySelectorAll("#menu li");

        function setactive() {
            menuLi.forEach((li) => {
                li.classList.remove("active");
                this.classList.add("active");
            });
        }

        menuLi.forEach((li) => li.addEventListener("click", setactive));

        const menuCards = document
            .querySelector(".row-container")
            .querySelectorAll(".row-menu-card");

        function menuActive() {
            menuCards.forEach((el) => {
                el.classList.remove("active");
                this.classList.add("active");
            });
        }

        menuCards.forEach((el) => el.addEventListener("click", menuActive));
    }, [isMainData]);

    // filter for items
    const filterForItems = (itemId) => {
        setIsMainData(Items.filter((el) => el.itemId === itemId));
    };

    return (
        <div className="App">
            {/* Header Section */}
            <Header />
            {/* Main Cotainer */}
            <main className="d-md-flex ">
                <div className="Main-Container">
                    {/* banner */}
                    <div className="banner">
                        <BannerName
                            name={"mohamed"}
                            discount={"50"}
                            link={"#"}
                        />
                        <img src={image} alt="" className="delivery-pic" />
                    </div>

                    {/* Dish */}
                    <div className="Dish-container">
                        <div className="menu-card">
                            <SubMenuContainer name={"Menu Categoey"} />
                        </div>

                        <div className="row-container">
                            {MenuItems &&
                                MenuItems.map((data) => (
                                    <div
                                        key={data.id}
                                        id={data.id}
                                        onClick={() =>
                                            filterForItems(data.itemId)
                                        }
                                    >
                                        <MenuCard
                                            imgSrc={data.imgSrc}
                                            name={data.name}
                                            isactive={
                                                data.id === 1 ? true : false
                                            }
                                        />
                                    </div>
                                ))}
                        </div>

                        <div className="dish-item-container">
                            {isMainData &&
                                isMainData.map((data) => (
                                    <ItemCard
                                        key={data.id}
                                        itemId={data.id}
                                        imgSrc={data.imgSrc}
                                        name={data.name}
                                        ratings={data.ratings}
                                        price={data.price}
                                    />
                                ))}
                        </div>
                    </div>
                </div>
                <div className="right-menu ">
                    <div className="debit-card-container">
                        <div className="debit-card">
                            <DebitCard />
                        </div>
                    </div>

                    <div className="card-checkOut-container">
                        <div className="card-container">
                            <SubMenuContainer name={"card itams"} />

                            <div className="card-itams">
                                {Items.map((el) => (
                                    <CardItam
                                        name={el.name}
                                        imgSrc={el.imgSrc}
                                        price={el.price}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="total-section">
                            <h3>total</h3>
                            <p>
                                {" "}
                                <span>$</span> 4.55{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            {/* Button Menu */}
            <div className="Button-Menu">
                <ul id="menu">
                    {/* prettier ignore */}
                    <MenuContainer link={"#"} icon={<HomeRounded />} isHome />
                    {/* prettier ignore */}
                    <MenuContainer link={"#"} icon={<Chat />} />
                    {/* prettier ignore */}
                    <MenuContainer
                        link={"#"}
                        icon={<AccountBalanceRounded />}
                    />
                    {/* prettier ignore */}
                    <MenuContainer link={"#"} icon={<Favorite />} />
                    {/* prettier ignore */}
                    <MenuContainer link={"#"} icon={<SummarizeRounded />} />
                    {/* prettier ignore */}
                    <MenuContainer link={"#"} icon={<Settings />} />

                    <div className="indicator"></div>
                </ul>
            </div>
        </div>
    );
}

export default App;
