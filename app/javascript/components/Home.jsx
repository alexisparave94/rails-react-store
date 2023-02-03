import React, { useEffect } from "react";

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

  return(
    <div>
      {products.map((product, index) => 
        <div key={`product-${index + 1}`}>
          <div>{product.sku}</div>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <div>{product.price}</div>
        </div>
      )};
    </div>
  )
}

export default Home;