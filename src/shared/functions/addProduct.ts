import { productsKeys } from "../enums/localStorageKeys";
import { Product } from "../interfaces/Product";
import { getItems, setItems } from "./localStorageFunctions";

export const addProduct = (product:Product)=>{
    const products: Product[] = getItems();
    products.push(product);
    setItems(products);
}