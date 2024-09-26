import { Link } from "react-router-dom";
import { useEffect, useState } from "react"



const Home = (props) => {
  const [allproducts,setallproducts]=useState([]);
  console.log(allproducts)

  let getData = async()=>{
    let items = await fetch('https://dummyjson.com/products?skip=0&limit=0')
    let data = await items.json()
    console.log(data.products)
    setallproducts(data.products)      

  }
  useEffect(()=>{
    getData();
  },[])

  const handleAdd = (ans)=>{
    console.log(ans)
    let updatedObj = {...ans,quantity:1}
  props.getCartItem(updatedObj)
  }



  return (
    <div className=' row bg-info d-flex justify-contentt-center gap-3'>
  
    <div className="product"></div>
    {
      allproducts.map((ele,index)=>{
        return <div key={index} className="card" style={{width:"18rem"}}>.

           <img src={ele.thumbnail} className="card-img-top" alt="..." /> 
          <div className="card-body">
            <h5 style={{height:"50px"}} className="card-title">{ele.title}</h5>
            <p className="card-text">Price:{ele.price}</p>
            <Link to="/Single" state={ele} className="btn btn-primary">View Details</Link>
            <button onClick={()=>handleAdd(ele)} className="btn btn-success ms-1">Add to Cart</button>
          </div>


        </div>
      })
    }

    </div>
  )
}

export default Home
 