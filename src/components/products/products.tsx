import React, { useEffect, useState } from 'react'
import { products } from '../../shared/data/products';
import { Product } from '../../shared/interfaces/Product';
import ProductItem from '../product/product';

const Products = () => {
  const [data,setData]= useState(products)
  



  return (
    <div className='row justify-content-between'>
      {data.map((item :Product)=>{
        return (
          <div key={item.id} className='col-12 col-md-6 col-lg-3 my-3'>
            <ProductItem productData={item}/>
            
          </div>
        )
      })
      }
    </div>
  )
}

export default Products