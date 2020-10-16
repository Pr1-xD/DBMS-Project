import React,{useState, useEffect} from 'react';
import './App.css';
import Cards from './Cards'
import CartCards from './CartCards'
import axios from 'axios'
import Nav from './Nav'

function App() {
  const [priceArr,setPriceArr]=useState([])
  const [totalPrice,setTotalPrice]=useState(0)
  const [data,setData]=useState(null)
  const [cartToggle,setCartToggle]=useState(false)
  useEffect(()=>{
    axios.get('http://localhost:5000')
    .then(res => {
    console.log(res.status)
    setData(res.data)})
  },[])
  function updateDb(val){
    setTotalPrice(totalPrice+val.price)
    console.log(totalPrice)
    let tempArr=priceArr
    tempArr.push(val)
    setPriceArr(tempArr)
    console.log(priceArr)
  }

  function checkOutDb(){
    console.log(totalPrice)
    let q=`INSERT INTO CART VALUES('1003',${totalPrice});`
    axios.post('http://localhost:5000/post',{'query':q})
    .then(res=>{
      console.log(res)
    })
  }


  function checkDb(){
    axios.get('http://localhost:5000/cart')
    .then(res=>{
      console.log(res)
    })
  }

  function showCart(){
    setCartToggle(true)
  }
  
  return (
    <div className="App">
      <Nav />
      <br/><br/><br/><br/>      
      {(data!=null)?<Cards data={data} updateDb={updateDb}/>:<br/>}
      <button class="btn btn-primary" onClick={showCart}>Cart</button>
      {cartToggle?<CartCards data={priceArr} checkOutDb={checkOutDb} />:<br/>}
      <button class="btn btn-primary" onClick={checkDb}>Check DB</button>
    </div>
  )
}

export default App;
