import React, { useState } from 'react'
import CartCards from './CartCards'
import Alert from './Alert'
import Bill from './Bill'

function Cart(props){
    const [alert,setAlert]=useState(false)
    let data=props.data
    function checkOutDb(val)
    {props.checkOutDb(val)
    setAlert(true)}
    return(
        <>
        <h1 className="header">Cart</h1>
        {<CartCards data={data} checkOutDb={checkOutDb} />}
        <Bill data={data} checkOutDb={checkOutDb} setAlert={setAlert}/>
        {alert?<Alert/>:<></>}
        </>
    )}

export default Cart