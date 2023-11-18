import { getItems, setItems } from "./localStorageFunctions"

export const removeProduct = (id:number) =>{
    console.log(id)
    const data = getItems().filter(item => item.id != id);
    console.log(data)
    setItems(data);
}