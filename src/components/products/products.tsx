import React, { useEffect, useState } from 'react'
import { products } from '../../shared/data/products';

const Products = () => {
  const [data,setData]= useState(products)




  return (
    <div>
      {data.map((item:any)=>{
      return(
        <p key={item.id}> {item.name} </p>
      )
    })}</div>
  )
}

export default Products