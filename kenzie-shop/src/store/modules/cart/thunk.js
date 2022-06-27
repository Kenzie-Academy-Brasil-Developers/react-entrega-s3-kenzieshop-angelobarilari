import { cartItems } from "./actions";

export const cartThunk = (product) => {
    return(dispatch) => {
        const productList = JSON.parse(localStorage.getItem("cart")) || [];
        
        productList.push(product)

        localStorage.setItem("@cart", JSON.stringify(productList));

        dispatch(cartItems(productList))
    }
}