import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CardProduct from "./products/card-product";

function Home(){
  const [products, setProducts] = React.useState([])

  useEffect(() => {
    const url = "/api/v1/products"
    
    fetch(url)
      .then((res) => {
        if (res.ok)
          return res.json();
        throw new Error('Network error!')
      })
      .then(setProducts)
      .catch(console.log)
  }, [])

  function handleDeleteProduct(id){
    const url = `/api/v1/products/${id}`

    fetch(url, {
      method: 'DELETE'
    })
      .then((res) => {
        if(res.ok)
          return res.json();
        throw new Error('Network error');
      })
      .then(() => {
        const newProducts = products.filter((prod)=> prod.id !== id)
        setProducts(newProducts)
      })
      .catch(console.log);
  }

  return(
    <div className="container mt-4">  
      <Link to="/products/new" className="btn btn-primary">New Product</Link>
      <div className="d-flex flex-column gap-3 mt-3 mb-4">
        {products.map((product) =>
          <CardProduct key={`product-${product.id}`} product={product} onDeleteProduct={handleDeleteProduct} />
        )}
      </div>
    </div>
  )
}

export default Home;