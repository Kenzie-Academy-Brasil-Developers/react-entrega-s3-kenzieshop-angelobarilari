import { CART } from "./actionTypes";

export const cartItems = (cartProducts) => ({
    type: CART,
    cartProducts,
})