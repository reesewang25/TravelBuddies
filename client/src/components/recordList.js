import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Box from "./box.js"

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
   <td>
     <Link className="btn btn-link" to={`/edit/${props.record._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteRecord(props.record._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);
 
export default function RecordList() {
 const [records, setRecords] = useState([]);
 const r=records.map(item=>{
      return (
        <Box item={item}/>
      )
 })
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://localhost:4000/record/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const records = await response.json();
     setRecords(records);
   }
 
   getRecords();
 
   return;
 }, [records.length]);
 
 // This method will delete a record
 async function deleteRecord(id) {
   await fetch(`http://localhost:4000/${id}`, {
     method: "DELETE"
   });
 
   const newRecords = records.filter((el) => el._id !== id);
   setRecords(newRecords);
 }
 
 // This method will map out the records on the table
 function recordList() {
   return records.map((record) => {
     return (
       <Record
         record={record}
         deleteRecord={() => deleteRecord(record._id)}
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