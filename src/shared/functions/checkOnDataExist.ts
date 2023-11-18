import { products } from "../data/products"
import { productsKeys } from "../enums/localStorageKeys"
import { Product } from "../interfaces/Product"
import { getItems, setItems } from "./localStorageFunctions"

export const checkIfDataExist = () : Product[]=>{
    if(localStorage.getItem(productsKeys.productsData)){
        return getItems()
    }else{
        setItems()
        return products
    }
}