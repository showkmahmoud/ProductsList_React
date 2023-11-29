import React from 'react'
import { Product } from '../../shared/interfaces/Product';
import ProductItem from '../product/product';
import { getItems } from '../../shared/functions/localStorageFunctions';
import './products.css'
import { editProduct, removeProduct } from '../../shared/functions/fetchingStaticDataFuncs';
const Products = ({products, data }:any) => { 
  const handleRemoveProduct = (id:number) =>{
    removeProduct(id)
    data(getItems())
  } 

  const handleEditProduct = (product:Product) =>{
    editProduct(product)
    data(getItems())
  }
  return (
    <div className='row justify-content-between align-items-stretch products-wrapper' >
      {products.map((item :Product)=>{
        return (
          <div key={item.id} className='col-12 col-md-6 col-lg-3 my-3'>
            <ProductItem productData={item} removeProduct = {handleRemoveProduct}
             editProduct = {handleEditProduct}/>
          </div>
        )
      })
      }
    </div>
  )
}

export default Products