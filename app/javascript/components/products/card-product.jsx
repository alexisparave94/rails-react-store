import React from "react"
import { Link } from "react-router-dom";

function CardProduct(props){
  const { product } = props

  return (
    <div className="card px-3 py-2">
      <div className="card-body">
        <div className="mb-4">
          <h6 className="card-subtitule text-muted">{product.sku}</h6>
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <h6 className="card-subtitule text-muted">$ {product.price}</h6>
        </div>
        <div className="d-flex gap-3">
          <Link to={`/products/${product.id}`} className="btn btn-primary">Show</Link>
          <button className="btn btn-primary">Edit</button>
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div> 
  )
}

export default CardProduct;