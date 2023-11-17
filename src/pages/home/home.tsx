import React ,{useState,useEffect}from 'react'
import { checkIfDataExist } from '../../shared/functions/checkOnDataExist';
import Products from '../../components/products/products';
import { Product } from '../../shared/interfaces/Product';
import { productCategories } from '../../shared/enums/productCategory';
import { addProduct } from '../../shared/functions/addProduct';
import { getData } from '../../shared/functions/getData';
const Home = () => {
  const [productsData,setproductsData]:any[] = useState([]);
  const handleAddingProdyuct = ()=>{
    const productID = Math.floor(Math.random() * 100);
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
    setproductsData(getData());
  }
  useEffect(() => {
    setproductsData(checkIfDataExist());
  }, [])
  
  return (
    <div>
      <div className='ms-auto'>
        <button className='btn primary-btn' onClick={handleAddingProdyuct}>Add</button>
      </div>
      <Products products = {productsData}/>
    </div>
  )
}

export default Home