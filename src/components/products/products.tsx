import React from 'react'
import { Product } from '../../shared/interfaces/Product';
import ProductItem from '../product/product';

const Products = ({products}:any) => {  
  return (
    <div className='row justify-content-between'>
      {products.map((item :Product)=>{
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