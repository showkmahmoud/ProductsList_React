import React from 'react'
import './product.css'
import { Link } from 'react-router-dom'
import '../../shared/styles/style.css'
import { Product } from '../../shared/interfaces/Product'
const ProductItem = ({productData, removeProduct,editProduct,  ...props}:any) => {
  const handleRemove = (id:number) =>{
    removeProduct(id);
  }
  const handleEdit = (product:Product) =>{
    editProduct(product);
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
          <button className='btn btn-success w-50' onClick={() => handleEdit(productData)}>Edit</button>
          <button className='btn btn-danger w-50' onClick={ ()=> handleRemove(productData.id)}>Remove</button>

         </div>
    </div>
  )
}

export default ProductItem