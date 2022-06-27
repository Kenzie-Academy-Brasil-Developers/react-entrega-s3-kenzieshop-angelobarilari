import { useSelector } from "react-redux";
import Product from "../Product";

import "./style.css"

function ProductList() {
    const productList = useSelector(state => state.products)

    return(
        <div className="products-container">
            {productList?.map((element, index) =>
                <Product key={index} product={element}/>
                )}
        </div>
    )
}

export default ProductList