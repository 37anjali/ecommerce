
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home';
import Cart from './pages/Cart';
import Single from './pages/Single';
import Pagenotfound from './pages/Pagenotfound';
import Navbar from './component/Navbar';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [cartArr,setcartArr] = useState([]);
 console.log(cartArr)

  let getCartItem = (ans)=>{
    console.log(ans)
  

   let existItem = cartArr.find((ele)=>ele.id===ans.id)
   console.log(existItem)
   if(!existItem){

    setcartArr([...cartArr,ans])
    toast.success('item added successfuly',{position:'top-center'})
  }
  else{
    toast.warning("item already added",{position:"top-center"})
  }
  }
  return (
    <div className="App">
     <BrowserRouter>
  <div style={{marginBottom:"70px"}}> <Navbar cartArr={cartArr}/></div>
<Routes>
  <Route path='/' element={<Home getCartItem={getCartItem}/>}></Route>
  <Route path='/cart' element={<Cart cartArr={cartArr} setcartArr={setcartArr}/>}></Route>
  <Route path='/Single' element={<Single/>}></Route>
  <Route path='/*' element={<Pagenotfound/>}></Route>
 
</Routes>
<ToastContainer />


     </BrowserRouter>
     
    </div>
  );
}

export default App;
