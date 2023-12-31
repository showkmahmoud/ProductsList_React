import { Product } from "../interfaces/Product";
import { getItems, setItems } from "./localStorageFunctions";

export const editProduct = (product:Product) =>{
    const products = getItems();
    const productIndex = products.findIndex((item => item.id === product.id));
    products.splice(productIndex,1,product);
    setItems(products)
}