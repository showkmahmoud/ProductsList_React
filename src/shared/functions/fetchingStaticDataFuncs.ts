import { Product } from "../interfaces/Product";
import { getItems, setItems } from "./localStorageFunctions";

export const addProduct = (product:Product)=>{
    const products: Product[] = getItems();
    products.push(product);
    setItems(products);
}

export const editProduct = (product:Product) =>{
    const products = getItems();
    const productIndex = products.findIndex((item => item.id === product.id));
    products.splice(productIndex,1,product);
    setItems(products)
}

export const removeProduct = (id:number) =>{
    const data = getItems().filter(item => item.id !== id);
    setItems(data);
}