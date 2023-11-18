import { productsKeys } from "../enums/localStorageKeys";
import { Product } from "../interfaces/Product";
import { getItems } from "./localStorageFunctions";

export const addProduct = (product:Product)=>{
    const products: Product[] = getItems();

    products.push(product);
    localStorage.setItem(productsKeys.productsData, JSON.stringify(products))
}