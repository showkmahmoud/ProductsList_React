import React from 'react'
import './product.css'
import { Link } from 'react-router-dom'
const ProductItem = ({productData, ...props}:any) => {
  return (
    <Link to={`productDetails/${productData.id}`}>
    <div className='product-card text-center px-4' >
      <div className="img-wrapper">
        <img src={productData.img} alt={productData.img} />
      </div>
      <div className="product-info">
        <div className="d-flex justify-content-between">
        <p>{productData.name}</p>
        <p>{productData.price}</p>
        </div>
        <p className='text-start'>{productData.description}</p>
      </div>
    </div>
    </Link>
  )
}

export default ProductItem