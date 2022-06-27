import "./style.css"

function CartFooter(  { price }  ) {
    return(
        <div className="cart-footer">
             Total: <span>${price}</span>
        </div>
    )
}

export default CartFooter