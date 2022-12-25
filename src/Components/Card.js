import React from "react"


export function Card(props) {


return (
<div className="card">
        {props.openSpots===0? <div className="status-badge">SOLD</div> : <div className="status-badge">{props.openSpots} spots left</div>}
        <img src={`./images1/${props.coverImg}`} width="170px" height="230px" alt="katiezaferes" className="imagek"/>
            <div className="card-discription">
                <img src='./images1/star.png'  width="14px" alt="starlogo" />
                <p>{props.stats.rating}</p>
                <p className="gray">({props.stats.reviewCount}).{props.location}</p>
            </div>
        <p className="card--title">{props.title}</p>
        <p><span className="bold">From ${props.price}</span> / person</p>
            
</div>
)
}
