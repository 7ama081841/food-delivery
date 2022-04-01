import { filter, map, noop } from "lodash";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Banner from "../components/banner/Banner";
import ItemCard from "../components/item-card/ItemCard";
import MenuCard from "../components/menu-card/MenuCard";
import SubMenuContainer from "../components/sub-menu-container/SubMenuContainer";
import { Menu, Products } from "../data";
import image from "../images/take-out-biryani-pizza-chinese-cuisine-delivery-pizza-delivery-95393146bb30d5c8e45c2d168a63f28d.png";
import {
    loadMenu,
    loadProducts,
    unloadMenu,
    unloadPorducts,
} from "../store/actions";

function HomeView({
    isLoading = true,
    getProducts = noop,
    getMenuItems = noop,
    loadMenu = noop,
    loadProducts = noop,
    unloadMenu = noop,
    unloadPorducts = noop,
}) {
    const [categoryId, setCategoryId] = useState();

    useEffect(() => {
        loadMenu(Menu);
        loadProducts(Products);

        return () => {
            unloadMenu();
            unloadPorducts();
        };
    }, []);

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
    }, [categoryId]);

    if (isLoading) {
        return <span>Loading...</span>;
    }

    return (
        <div className="Dish-container">
            {/* Main Cotainer */}

            <div className="Main-Container">
                {/* banner */}
                <div className="banner">
                    <Banner name="mohammed" discount="50" link="#" />
                    <img src={image} alt="" className="delivery-pic" />
                </div>

                {/* Dish */}
            </div>

            <div className="menu-card">
                <SubMenuContainer name={"Menu Categoey"} />
            </div>

            <div className="row-container">
                {map(getMenuItems(), (item) => (
                    <div
                        key={item.id}
                        id={item.id}
                        onClick={() => setCategoryId(item.itemId)}
                    >
                        <MenuCard
                            imgSrc={item.imgSrc}
                            name={item.name}
                            isactive={item.id === 1 ? true : false}
                        />
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8">
                {map(getProducts(categoryId), (item) => (
                    <ItemCard
                        key={item.id}
                        id={item.id}
                        itemId={item.itemId}
                        imgSrc={item.imgSrc}
                        name={item.name}
                        ratings={item.ratings}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.menu.loading || state.products.loading,
        getMenuItems: () => state.menu.items,
        getProducts: (categoryId) => {
            if (categoryId)
                return filter(
                    state.products.items,
                    (item) => item.itemId === categoryId
                );
            else {
                return state.products.items;
            }
        },
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadMenu: loadMenu(dispatch),
        loadProducts: loadProducts(dispatch),
        unloadMenu: unloadMenu(dispatch),
        unloadPorducts: unloadPorducts(dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
