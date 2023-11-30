import axios from 'axios';
import { productsApi } from '../data/apis';

export const getProducts = async () =>{
    const result = await axios.get(productsApi.get);
    return result.data 
}