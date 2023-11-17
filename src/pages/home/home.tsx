import React ,{useState,useEffect}from 'react'
import { checkIfDataExist } from '../../shared/functions/checkOnDataExist';
import Products from '../../components/products/products';
const Home = () => {
  const [productsData,setproductsData]:any[] = useState([]);

  useEffect(() => {
    setproductsData(checkIfDataExist());
  }, [])
  
  return (
    <div>
      <Products products = {productsData}/>
    </div>
  )
}

export default Home