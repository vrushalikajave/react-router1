import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
    const[ products, setProducts]=useState([])

    useEffect(()=> {

        const fetchProduct=()=>{
            fetch("http://localhost:8080/products")
            .then(r=> r.json())
            .then((d)=>{
                setProducts(d)
               // console.log(products)
            });
        }
        fetchProduct()
    },[])

  return (
      <div>
        
          Products: 
        
        <div style={{display : "grid", gridTemplateColumns: "1fr 1fr 1fr"}}>
            <Outlet/>
            <div>
              {products.map(p=>(
                <div key={p.id}>
                  <Link to= {`/products/${p.id}`}> {p.name}</Link> 
                </div>
                ))}
            </div>
            <Outlet/>
        </div>
      </div>
  )}

export default Products
