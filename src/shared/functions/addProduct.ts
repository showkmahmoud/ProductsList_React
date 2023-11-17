import { productsKeys } from "../enums/localStorageKeys";
import { Product } from "../interfaces/Product";
import { getData } from "./getData";

export const addProduct = (product:Product)=>{
    const products: Product[] = getData();
    products.push(product);
    localStorage.setItem(productsKeys.productsData, JSON.stringify(products))
}