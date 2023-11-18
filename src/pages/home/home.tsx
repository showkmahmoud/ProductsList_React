import React ,{useState,useEffect}from 'react'
import { checkIfDataExist } from '../../shared/functions/checkOnDataExist';
import Products from '../../components/products/products';
import { Product } from '../../shared/interfaces/Product';
import { productCategories } from '../../shared/enums/productCategory';
import { addProduct } from '../../shared/functions/addProduct';
import { getItems } from '../../shared/functions/localStorageFunctions';
const Home = () => {
  const [productsData,setproductsData]:any[] = useState([]);
  const handleAddingProdyuct = ()=>{
    let  productID = Math.floor(Math.random() * 100000);
    if(getItems().filter(product => product.id === productID)){
      productID = Math.floor(Math.random() * 1000);
    }
    // @TODO dialog to add the product
    const newProd:Product ={
      id : productID,
      img:'',
      name:`item ${productID}`,
      category:productCategories.syrup,
      description:'lorem',
      price:'80 $'
    }
    addProduct(newProd);
    setproductsData(getItems());
  }
  
  const handleEditOrRemove = () =>{
    setproductsData(getItems())
  }
  useEffect(() => {
    setproductsData(checkIfDataExist());
  }, [])

  return (
    <div>
      <div className='text-end'>
        <button className='btn btn-primary px-5' onClick={handleAddingProdyuct}>Add</button>
      </div>
      <Products products = {productsData} data = {handleEditOrRemove} />
    </div>
  )
}

export default Home