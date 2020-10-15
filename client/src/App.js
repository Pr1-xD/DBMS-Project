import React,{useState, useEffect} from 'react';
import './App.css';
import Cards from './Cards'
import axios from 'axios'

const que="INSERT INTO da VALUES('abc','a','b',123456,'01-JAN-20','abc','M',80000,12345,3)"

function App() {
  const [data,setData]=useState(null)
  useEffect(()=>{
    axios.get('http://localhost:5000')
    .then(res => {
    console.log(res.status)
    setData(res.data) })
  },[])

  function updateDb(){
    axios.post('http://localhost:5000/post',{abc:que})
    .then(res=>{
      console.log(res)
    })
  }
  
  return (
    <div className="App">
      <button onClick={updateDb}>Post</button>
      {(data!=null)?<Cards data={data}/>:<br/>}
    </div>
  )
}

export default App;
