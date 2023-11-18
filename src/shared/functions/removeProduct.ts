import { getItems, setItems } from "./localStorageFunctions"

export const removeProduct = (id:number) =>{
    const data = getItems().filter(item => item.id !== id);
    setItems(data);
}