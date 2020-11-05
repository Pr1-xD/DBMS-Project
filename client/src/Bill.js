import React, { useState } from 'react'

function Bill(props){
    const [amt,setAmt]=useState(0)
    let tempAmt=[]
    const data=props.data

    function checkOutDb(val)
    {props.checkOutDb(val)
    props.setAlert(true)}

    function billRender(obj){
        tempAmt.push(obj.price)
        return(
        <h5 class="card-title bill-items">{obj.name}  {obj.price}</h5>
        )
    }
    return(
        <>
        <div class="card bill">
        <div class="card-header">
           <h3>Bill</h3>
        </div>
        <div class="card-body">
            {data.map(billRender)}
        </div>
        <div class="card-footer">
            <p>Total </p>
            <h3 class="card-text">{tempAmt.reduce((a, b) => a + b,0)}</h3>
            <a class="btn btn-primary" onClick={checkOutDb}>Checkout</a>
        </div>
        </div>
        </>
    )}

export default Bill