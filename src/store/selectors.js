import { find } from "lodash";

export const getQuantity = (state) => (id) => {
    const cartItem = find(state.cart, (item) => item.pid === id);
    return cartItem.q;
};

export const getPricePerProduct = (state) => (id) => {
    const product = find(state.products.items, (item) => item.id === id);

    if (product) {
        const cartItem = find(state.cart, (item) => item.pid === id);

        return cartItem.q * product.price;
    }

    return 0;
};
