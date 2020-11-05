import React from 'react'
import Cards from './Cards'

function Home(props){
    let data=props.data
    function updateDb(val)
    {props.updateDb(val)}
    return(
        <>
        <h1 className="header">Our Products</h1>
        {(data!=null)?<Cards className="home" data={data} updateDb={updateDb}/>:<></>}
        </>
    )}

export default Home