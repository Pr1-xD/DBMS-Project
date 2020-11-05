import React from 'react'
import img from './dummy.jpeg'
function CartCard(props){
    console.log(props)
    return(
        <div class="card custom-card">
            <img class="card-img-top" src={img} />
            <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
                <p class="card-text">{props.model}</p>
                <h5 class="card-title">{props.price}</h5>
                {/* <a href="#" class="btn btn-primary" onClick={updateDb}>Add to Cart</a> */}
            </div>
        </div>
    )
}
export default CartCard