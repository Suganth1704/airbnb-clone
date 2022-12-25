import React from "react"
import airbnb from "./images/airbnb.png"
import photogrid from "./images/photogrid.png"

export function Navbar()
{
    return(
        <div className="container">
            <nav>
               <img src={airbnb} alt="logo"/>
            </nav> 
            <div className="grid-container"> 
                <img src={photogrid} width="400px" height="230px" className="photo-grid" alt="photogrid"></img>
            </div>
            <div className="content-div">
                <h2>Online Experiences</h2>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </div>
    )
}