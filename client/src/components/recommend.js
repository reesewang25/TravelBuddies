import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import * as recent from "./mostRecent";
import Box from "./box.js"


//"object" record- what a record looks like
const Record = (props) => (
    <tr>
      <td>{props.record.name}</td>
      <td>{props.record.phoneNumber}</td>
      <td>{props.record.gtEmail}</td>
      <td>{props.record.date}</td>
      <td>{props.record.leavingTimeFrom}</td>
      <td>{props.record.leavingTimeTo}</td>
      <td>{props.record.flightTime}</td>
      <td>{props.record.location}</td>
      <td>{props.record.comment}</td>
      
    </tr>
   );

export default function RecordList(date) {
    const [records, setRecords] = useState([]);
    //box display thing
    const r=records.map(item=>{
        return (
          <Box item={item}/>
        )
   });//added semicolon
    // This method fetches the records from the database.
    useEffect(() => {
      async function getRecords(date, gtEmail) {
        const response = await fetch(`http://localhost:4000/filter/${date}/${gtEmail}`);
    
        if (!response.ok) {
          const message = `An error occurred: ${response.statusText}`;
          window.alert(message);
          return;
        }
    
        const records = await response.json();
        setRecords(records);
      }
        getRecords(recent.globalArray[0], recent.globalArray2[0]);
      return;
    }, [records.length]);
    
    
    // This method will map out the records on the table
    function recordList() {
      return records.map((record) => {
        return (
          <Record
            record={record}
            key={record._id}
          />
        );
      });
    }
    
    
    // This following section will display the table with the records of individuals.
    return (
        <div className="page2Container"> 
        <h1>TRAVEL BUDDIES</h1>
        <p>These are the people you might want to travel with:</p>
        <div >
          {r}
        </div>
        
      </div>
      
    );
   }