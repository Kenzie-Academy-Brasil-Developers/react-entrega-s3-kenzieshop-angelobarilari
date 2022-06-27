import "./style.css"

function CartProduct( { product } ) {
    return(
        <div className="cart-product">
            <img src={product.img} alt={product.name}/>

            <div>
                <p>
                    {product.name}
                </p>

                <p>
                    R$ {product.price}
                </p>
             </div>
        </div>
    )
}

export default CartProduct