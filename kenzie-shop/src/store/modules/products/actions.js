import { PRODUCTS } from "./actionTypes"

export const addProduct = (product) => ({
    type: PRODUCTS,
    product,
})