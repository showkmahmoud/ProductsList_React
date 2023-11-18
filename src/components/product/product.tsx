import React from 'react'
import './product.css'
import { Link } from 'react-router-dom'
import '../../shared/styles/style.css'
const ProductItem = ({productData, selectedProduct, ...props}:any) => {
  const handleOnclick = (id:number) =>{
    selectedProduct(id);
  } 
  return (
    <div className='product-card text-center p-4' >
    <Link className='global-link' to={`productDetails/${productData.id}`}>
      <div className="img-wrapper">
        <img src={productData.img} alt={productData.img} />
      </div>
      </Link>
      <div className="product-info">
        <div className="d-flex justify-content-between">
        <p>{productData.name}</p>
        <p>{productData.price}</p>
        </div>
        <p className='text-start'>{productData.description}</p>
      </div>
         <div className="actions-wrapper d-flex justify-content-between align-items-center">
          <button className='btn btn-success w-50' onClick={() => handleOnclick(productData.id)}>Edit</button>
          <button className='btn btn-danger w-50' onClick={ ()=> handleOnclick(productData.id)}>Remove</button>

         </div>
    </div>
  )
}

export default ProductItem