import React from 'react'
import { Product } from '../../shared/interfaces/Product';
import ProductItem from '../product/product';
import { removeProduct } from '../../shared/functions/removeProduct';
import { getItems } from '../../shared/functions/localStorageFunctions';
import { editProduct } from '../../shared/functions/editProduct';
import './products.css'
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