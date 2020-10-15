import React from 'react'
function Card(props){
    return(
        <div>
        <div className="card display-card" >
        <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.address}</p>
    </div>
    </div>
    </div>
    )
}
export default Card