import Item from "./Item";
import "./ItemListContainer.css";

import { products } from "../products";
const ItemListContainer = () => {
    return (
        <div className="ItemListContainer">
            {
                products.map((product)=>{
                    return(
                        <Item
                            key={product.id}
                            title={product.title}
                            price={product.price}
                            pictureUrl={product.pictureUrl} 
                        />
                    )
                })
                
            }
        </div>

    )
};

export default ItemListContainer;