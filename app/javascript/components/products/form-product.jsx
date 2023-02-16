import React from "react"
import { useNavigate, useParams } from "react-router-dom"

function FormProduct(props){
  const { isNewForm } = props
  const params = useParams()
  const navigate = useNavigate()
  const [sku, setSku] = React.useState("")
  const [name, setName] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [price, setPrice] = React.useState("")
  const [stock, setStock] = React.useState("")

  if(!isNewForm) {
    useEffect(() => {
      const url = `/api/v1/products/${params.id}`
  
      fetch(url)
        .then((res) => {
          if(res.ok)
            return res.json();
          throw new Error('Network error');
        })
        .then((res) => {
          setSku(res.sku);
          setName(res.name);
          setDescription(res.description);
          setPrice(res.price);
          setStock(res.stock);
        })
        .catch(console.log)
    }, [])
  }
  
  function handleChangeValue(e, setFuntion){
    setFuntion(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();

    const url = isNewForm ? "/api/v1/products" : `/api/v1/products/${params.id}`;

    const body = {
      sku, name, description, price, stock
    }

    fetch(url, {
      method: isNewForm ? 'POST' : 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then((res) => {
        if(res.ok)
          return res.json();
        throw new Error('Network error');
      })
      .then((res) => navigate(`/products/${res.id}`))
      .catch(console.log)
  }
  
  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="col-md-4 col-sm-8">
        <h1 className="text-center">
          { isNewForm ? 'New Product' : 'Edit Product' }
        </h1>
        <form onSubmit = {handleSubmit}>
          <div className="mb-3">
            <label htmlFor="sku" className="form-label">SKU</label>
            <input 
              type="text" 
              className="form-control" 
              id="sku" 
              name="sku" 
              value={sku}
              onChange = { (e) => handleChangeValue(e, setSku) }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input 
              type="text" 
              className="form-control" 
              id="name" 
              name="name" 
              value={name}
              onChange = { (e) => handleChangeValue(e, setName) }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea 
              className="form-control" 
              id="description" 
              name="description" 
              value={description}
              onChange = { (e) => handleChangeValue(e, setDescription) }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">Price</label>
            <input 
              type="text" 
              className="form-control" 
              id="price" 
              name="price" 
              aria-describedby="priceHelp"
              value={price}
              onChange = { (e) => handleChangeValue(e, setPrice) }
            />
            <div id="pricelHelp" className="form-text">Price in cents.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="stock" className="form-label">Stock</label>
            <input 
              type="text" 
              className="form-control" 
              id="stock" 
              name="stock"
              value={stock}
              onChange = { (e) => handleChangeValue(e, setStock) }
            />
          </div>
          <div className="d-grid mb-3">
            <button type="submit" className="btn btn-primary">
              { isNewForm ? 'Create Product' : 'Update Product'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormProduct