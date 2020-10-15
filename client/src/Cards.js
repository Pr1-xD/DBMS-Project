import React from 'react';
import './App.css';
import Card from './Card'

function Cards(props) {
    const mapdata=props.data
    console.log(mapdata)
        function cardsRender(item)
        {
            return(
            <Card key ={item.Address} name={item.FName} address={item.Address}/>
            )
        } 
    return (
        <div className="App">
        {mapdata.map(cardsRender)}
        </div>
    )
    }

export default Cards;
