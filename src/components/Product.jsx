import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
     const[products, setProducts]=useState({})
    const { id }= useParams();

    useEffect(()=>{
        if(id)
        {
            fetch(`http://localhost:8080/products/${id}`)
            .then((r)=>r.json())
            .then((d)=>setProducts(d))
        }
    },[id])
  return (
    <div>
      Product ID: {id}
      <div> {products.name}</div>
    
      {console.log(id)}
      
    </div>
  )
}

export default Product
