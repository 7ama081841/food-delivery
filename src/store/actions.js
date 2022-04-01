import {
    ADD_MENU_ITEMS,
    ADD_PRODUCTS,
    CART_ADD_ITEMS,
    CART_DECREMENT_PRODUCT_QUANTITY,
    CART_INCREMENT_PRODUCT_QUANTITY,
    CART_REMOVE_ITEMS,
    PRODUCTS_LOADED,
    PRODUCTS_LOADING,
    UNLOAD_MENU,
    UNLOAD_PRODUCTS,
} from "./constants";

export const loadMenu =
    (dispatch) =>
    (items = []) => {
        dispatch({
            type: ADD_MENU_ITEMS,
            items,
        });
    };

export const unloadMenu = (dispatch) => () =>
    dispatch({
        type: UNLOAD_MENU,
    });

export const loadProducts = (dispatch) => {
    return (products) => {
        dispatch({
            type: PRODUCTS_LOADING,
        });
        dispatch({
            type: ADD_PRODUCTS,
            items: products,
        });
        dispatch({
            type: PRODUCTS_LOADED,
        });
    };
};

export const unloadPorducts = (dispatch) => () =>
    dispatch({
        type: UNLOAD_PRODUCTS,
    });

export const incrementProductCartQuantity = (dispatch) => (id) => {
    dispatch({
        type: CART_INCREMENT_PRODUCT_QUANTITY,
        id,
    });
};

export const decrementProductCartQuantity = (dispatch) => (id) => {
    dispatch({
        type: CART_DECREMENT_PRODUCT_QUANTITY,
        id,
    });
};

export const createProduct = (dispatch) => (product) => {
    dispatch({
        type: ADD_PRODUCTS,
        items: [product],
    });
};

export const addToCart = (dispatch) => (product) => {
    dispatch({
        type: CART_ADD_ITEMS,
        items: [product],
    });
};

export const removeFromCart = (dispatch) => (productId) => {
    dispatch({
        type: CART_REMOVE_ITEMS,
        productId,
    });
};
