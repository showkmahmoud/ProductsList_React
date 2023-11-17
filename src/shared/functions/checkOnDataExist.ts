import { products } from "../data/products"
import { productsKeys } from "../enums/localStorageKeys"
import { Product } from "../interfaces/Product"

export const checkIfDataExist = () : Product[]=>{
    if(localStorage.getItem(productsKeys.productsData)){
        return JSON.parse(localStorage.getItem(productsKeys.productsData) as string)
    }else{
        localStorage.setItem(productsKeys.productsData, JSON.stringify(products))
        return products
    }
}