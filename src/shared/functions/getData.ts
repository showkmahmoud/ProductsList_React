import { productsKeys } from "../enums/localStorageKeys"

export  const getData = () =>{
    return JSON.parse(localStorage.getItem(productsKeys.productsData) as string)
}