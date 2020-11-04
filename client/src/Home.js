import React from 'react'
import Cards from './Cards'

function Home(props){
    let data=props.data
    function updateDb(val)
    {props.updateDb(val)}
    return(
        (data!=null)?<Cards data={data} updateDb={updateDb}/>:<></>
    )}

export default Home