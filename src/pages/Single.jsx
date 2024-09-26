import React from 'react'
import { useLocation } from 'react-router-dom'

const Single = () => {
  let location = useLocation()
  console.log(location.state)
  return (
    <div className='row m-0 p-0 mt-4'>
      <div className='col-md-6 d-flex justify-content-center'>
        <img src={location.state.thumbnail} alt="" />
      </div>
      <div className='col-md-6'>
        <h3>Title:{location.state.title}</h3>
        <h4>Brand:{location.state.brand}</h4>
        <h4>Category:{location.state.category}</h4>
        <p>Price: {location.state.price}</p>
        <p>Rating:{location.state.rating}</p>
        <p>Stock:{location.state.stock}</p>
        <p>Description:{location.state.description}</p>
        <p>Return Policy:{location.state.returnPolicy}</p>
        <button className='btn btn-info'>Add to Cart</button>
      </div>
    </div>
  )
}

export default Single
