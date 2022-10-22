import React from "react";

export default function Box(props){
    return(
    <div className="boxContainer">
        <p>Name:{props.item.name}</p>
        <p>GT Email:{props.item.gtEmail}</p>
        <p>Date:{props.item.date}</p>
        <p>Leaving Time Range:{props.item.leavingTimeFrom}~{props.item.leavingTimeTo}</p>
        <p>Time of Flight:{props.item.flightTime}</p>
        <p>On Campus Location:{props.item.location}</p>
        <p>Comments:{props.item.comment}</p>
    </div>)
    
}