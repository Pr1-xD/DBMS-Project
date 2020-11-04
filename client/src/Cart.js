import React from 'react'
import CartCards from './CartCards'

function Cart(props){
    let data=props.data
    function setPage(val){
        props.setPage(val)
    }
    function checkOutDb(val)
    {props.checkOutDb(val)}
    return(
        <>
        {<CartCards data={data} checkOutDb={checkOutDb} />}
        <button class="btn btn-primary" onClick={()=>{setPage('Home')}}>Home</button>
        </>
    )}

export default Cart