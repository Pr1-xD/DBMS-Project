import React from 'react';
import './App.css';
import CartCard from './CartCard'

function CartCards(props) {
    const cardsdata=props.data
    function checkOutDb(){
        props.checkOutDb()
    }
    console.log(cardsdata)
        function cardsRender(item)
        {   console.log(item)
            return(
            <div class="col-sm-3">
            <CartCard key ={item.ProductID} ProductID={item.ProductID} name={item.name} model={item.model} price={item.price} />
            </div>
            )
        } 
    return (
        <div>
            <div className="App row cart">
            {cardsdata.map(cardsRender)}
            </div>
        </div>
    )
    }

export default CartCards;