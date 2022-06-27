import { useDispatch } from "react-redux"
import { cartThunk } from "../../store/modules/cart/thunk"

import "./style.css"

function Product( { product } ) {
    const dispatch = useDispatch()

    return(
        <div className="product">
            <img src={product.img} alt={product.name}/>
            <div>
                <p>
                    {product.name}
                </p>

                <p>
                    R$ {product.price}
                </p>

                <button onClick={() => dispatch(cartThunk(product))}> Adicionar ao carrinho </button>
            </div>
        </div>
    )
}

export default Product