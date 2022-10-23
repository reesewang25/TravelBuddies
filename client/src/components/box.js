import React from "react";

export default function Box(props){
    return(
    <div className="boxContainer">
        <p id="boxName">Name: {props.item.name}</p>
        <div className="boxBody">
        <div>
            <p id="boxPhone">Phone #: {props.item.phoneNumber}</p>
            <p id="boxEmail">GT Email: {props.item.gtEmail}</p>
            <p id="boxLocation">On Campus Location: {props.item.location}</p>
            
        </div>
        <div className="boxRight">
            <p id="boxDate">Date: {props.item.date}</p> 
            <p id="boxLeavingTime">Leaving Time Range: {props.item.leavingTimeFrom}~{props.item.leavingTimeTo}</p>
            <p id="boxFlightTime">Time of Flight: {props.item.flightTime}</p>
            
            </div>
            
        </div>

        <p id="boxComment">Comments: {props.item.comment}</p>
    </div>)
    
}