import axios from 'axios';
import { productsApi } from '../data/apis';
import { Product } from '../interfaces/Product';

export const getProducts = async () =>{
    const result = await axios.get(productsApi.get);
    return result.data 
}


export const addProductAxios = async (product:Product) =>{
    console.log('add')
    await axios.post(productsApi.add,product) 
    getProducts()
}