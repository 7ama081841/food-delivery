import { filter } from "lodash";
import { combineReducers } from "redux";
import {
    ADD_MENU_ITEMS,
    ADD_PRODUCTS,
    CART_ADD_ITEMS,
    CART_DECREMENT_PRODUCT_QUANTITY,
    CART_INCREMENT_PRODUCT_QUANTITY,
    CART_REMOVE_ITEMS,
    DELETE_PRODUCTS,
    PRODUCTS_LOADED,
    PRODUCTS_LOADING,
    REMOVE_MENU_ITEMS,
    UNLOAD_MENU,
    UNLOAD_PRODUCTS,
} from "./constants";

const account = (state = {}, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const menu = (state = { loading: false, items: [] }, action) => {
    switch (action.type) {
        case ADD_MENU_ITEMS:
            return { ...state, items: [...state.items, ...action.items] };
        case REMOVE_MENU_ITEMS:
            return {
                ...state,
                items: filter(
                    state.items,
                    (item) => item.id === action?.item.id
                ),
            };
        case UNLOAD_MENU:
            return { ...state, items: [] };
        default:
            return state;
    }
};

const products = (state = { loading: false, items: [] }, action) => {
    switch (action.type) {
        case PRODUCTS_LOADING:
            return { ...state, loading: true };
        case PRODUCTS_LOADED:
            return { ...state, loading: false };
        case ADD_PRODUCTS:
            return { ...state, items: [...state.items, ...action.items] };
        case DELETE_PRODUCTS:
            return {
                ...state,
                items: filter(
                    state.items,
                    (item) => item.id === action?.item.id
                ),
            };
        case UNLOAD_PRODUCTS:
            return {
                ...state,
                items: [],
            };
        default:
            return state;
    }
};

const cart = (state = [], action) => {
    switch (action.type) {
        case CART_ADD_ITEMS: {
            return [...state, ...action.items];
        }

        case CART_INCREMENT_PRODUCT_QUANTITY: {
            const itemIdx = state.findIndex((item) => item.pid === action.id);
            return state.map((item, i) => {
                if (itemIdx !== i) {
                    return item;
                }

                item.q = item.q + 1;
                return item;
            });
        }

        case CART_DECREMENT_PRODUCT_QUANTITY: {
            const itemIdx = state.findIndex((item) => item.pid === action.id);

            return state.map((item, i) => {
                if (itemIdx !== i) {
                    return item;
                }

                item.q = item.q - 1;
                return item;
            });
        }

        case CART_REMOVE_ITEMS:
            return state.filter((item) => item.pid !== action?.productId);
        default:
            return state;
    }
};

export default combineReducers({ account, menu, products, cart });
