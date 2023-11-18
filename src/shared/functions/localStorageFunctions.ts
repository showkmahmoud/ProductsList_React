import { products } from "../data/products"
import { productsKeys } from "../enums/localStorageKeys"
import { Product } from "../interfaces/Product"



export const getItems = () : Product[] =>{
    return JSON.parse(localStorage.getItem(productsKeys.productsData) as string)
}

export const setItems = ()=>{
    localStorage.setItem(productsKeys.productsData, JSON.stringify(products))
}