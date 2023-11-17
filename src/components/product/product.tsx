import React from 'react'
import './product.css'
import { Link } from 'react-router-dom'
import '../../shared/styles/style.css'
const ProductItem = ({productData, ...props}:any) => {
  return (
    <div className='product-card text-center p-4' >
    <Link className='global-link' to={`productDetails/${productData.id}`}>
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
          </Link>

    </div>
  )
}

export default ProductItem