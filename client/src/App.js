import React,{useState, useEffect} from 'react';
import './App.css';
import Home from './Home'
import Cart from './Cart'
import axios from 'axios'
import Nav from './Nav'

function App() {
  const [page,setPage]=useState('Home')
  const [priceArr,setPriceArr]=useState([])
  const [totalPrice,setTotalPrice]=useState(0)
  const [data,setData]=useState(null)


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


  
return (
    <div className="App">
      <Nav page={page} setPage={setPage}/>
      <br/><br/><br/><br/>      
      {page=='Home'?<Home data={data} updateDb={updateDb}/>:page=='Cart' ?<Cart data={priceArr} page={page} checkOutDb={checkOutDb}/>:<></>}
      {/* <button class="btn btn-primary" onClick={checkDb}>Check DB</button> */}
    </div>
  )
}

export default App;
