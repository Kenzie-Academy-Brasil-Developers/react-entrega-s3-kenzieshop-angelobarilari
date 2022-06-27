import { CART } from "./actionTypes";

const cartReducer = (state = [], action) => {
    switch (action.type) {
        case CART:
            return state.concat(action.cartProducts)
        
        default:
            return state;
    }
}

export default cartReducer;