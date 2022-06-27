import { useSelector } from "react-redux";
import CartFooter from "../CartFooter";
import CartProduct from "../CartProduct";

import "./style.css"

function Cart() {
    const cartProducts = useSelector(state => state.cart)

    console.log(cartProducts)
    
    let acc = 0
    cartProducts.forEach(element => {
        acc += element.price
    });

    return(
        <div className="cart">
            <header className="cart-header"> Meu carrinho </header>

            <div className="cart-body">
                {cartProducts?.map((element, index) =>
                    <CartProduct key={index} product={element} />
                    )}
            </div>
        
            {acc !== 0 ? (
                <CartFooter price={acc}/>
            ) : (
                null
            )}
        </div>
    )
}

export default Cart