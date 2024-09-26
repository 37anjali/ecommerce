import React from 'react'

const Cart = (props) => {
  console.log(props.cartArr)


  let sum = 0;
  for(let value of props.cartArr){
    sum = sum+value.price
  }
  

   

 const handleIncrement = (ele,i)=>{
  console.log(ele)
  console.log(i)
  let updatedObj  = {
    ...ele,
    quantity:ele.quantity+1,
    price:ele.price+(ele.price/ele.quantity)
  }

  let updatedArr = [...props.cartArr]
  updatedArr[i] = updatedObj
  props.setcartArr(updatedArr)
 }


const handleDecriment =(ele,i)=>{

  console.log(ele)
  console.log(i)
  let updatedObj = {
    ...ele,
    quantity:ele.quantity>1? ele.quantity-1: ele.quantity,
    price:ele.quantity >1 ?ele.price-(ele.price/ele.quantity) : ele.price
  }
  let updatedArr = [...props.cartArr]
  updatedArr[i] = updatedObj
  props.setcartArr(updatedArr)
}


const handleDelete = (ele,i)=>{
  let copyArr = [...props.cartArr]
  copyArr.splice(i,1);
  props.setcartArr(copyArr)
}



  return (
    <div>
    <table class="table align-middle text-center md-6 ">
  <thead>
    <tr>
      <th scope="col">Sno</th>
      <th scope="col">Product</th>
      <th scope="col">Title</th>
      <th scope="col">Quantity</th>
      <th scope="col">Price</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
   
  {props.cartArr.map((ele,index)=>{
    return<tr key={ele.id}>
<th scope='row'>{index+1}</th>
<td><img style={{height:"100px",width:"100px"}} src={ele.thumbnail} alt="" /></td>
<td>{ele.title}</td>
<td><button onClick={()=>handleIncrement(ele,index)} className='btn btn-info'>+</button>{ele.quantity} <button onClick={()=>handleDecriment(ele,index)} className='btn btn-info'>-</button></td>
<td>{Math.ceil(ele.price)}</td> 
<td><button onClick={()=>handleDelete(ele,index)} className='btn btn-danger'>Delete</button></td>

    </tr>
  })}

  </tbody>
</table>
<h3 className='text-center  mt-2'>Total =${Math.ceil(sum)}</h3>
    </div>
  )
}

export default Cart
