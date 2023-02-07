import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function Product(){
  const [product, setProduct] = React.useState({})
  const params = useParams()

  useEffect(() => {
    const url = `/api/v1/products/${params.id}`
    
    fetch(url)
      .then((res) => {
        if(res.ok)
          return res.json();
        throw new Error('Network error')
      })
      .then(setProduct)
      .catch(console.log)
  }, [])

  return (
    <div className="container my-3">
      <h1>{product.name}</h1>
      <strong>{product.sku}</strong>
      <p>{product.description}</p>
      <p>$ {product.price}</p>
      <p>{product.stock}</p>
    </div>
  )
}

export default Product;