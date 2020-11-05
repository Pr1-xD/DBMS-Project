import React from 'react'
import img from './dummy.jpeg'

function Card(props){
    let itemData=props
    // function updateDb(){
    //     let q=`INSERT INTO CART VALUES('1002','${props.price}');`
    //     // let q=props.ProductID
    //     props.updateDb(q)
    // }
    function updateDb(){
        props.updateDb(itemData)
    }
    return(
        <div class="card custom-card">
            <img class="card-img-top" src={img} />
            <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
                <p class="card-text">{props.model}</p>
                <h5 class="card-title">{props.price}</h5>
                <a href="#" class="btn btn-primary" onClick={updateDb}>Add to Cart</a>
            </div>
        </div>
    )
}
export default Card