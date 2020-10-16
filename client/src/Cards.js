import React from 'react';
import './App.css';
import Card from './Card'

function Cards(props) {
    const mapdata=props.data

    function updateDb(q){
        props.updateDb(q)
       
    }
        function cardsRender(item)
        {
            return(
            <div class="col-sm-3">
            <Card key ={item.ProductID} ProductID={item.ProductID} name={item.Name} model={item.Model} price={item.Price} updateDb={updateDb}/>
            </div>
            )
        } 
    return (
        <div>
            <div className="App row">
            {mapdata.map(cardsRender)}
            </div>
        </div>
    )
    }

export default Cards;
