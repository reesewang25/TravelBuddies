import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import * as recent from "./mostRecent";

//"object" record- what a record looks like
const Record = (props) => (
    <tr>
      <td>{props.record.name}</td>
      <td>{props.record.position}</td>
      <td>{props.record.level}</td>
      
    </tr>
);

export default function RecordList(level) {
    const [records, setRecords] = useState([]);
    
    // This method fetches the records from the database.
    useEffect(() => {
      async function getRecords(level) {
        const response = await fetch(`http://localhost:4000/filter/${level}`);
    
        if (!response.ok) {
          const message = `An error occurred: ${response.statusText}`;
          window.alert(message);
          return;
        }
    
        const records = await response.json();
        setRecords(records);
      }
        getRecords(recent.globalArray[0]);
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
    async function deleteRecord(id) {
        await fetch(`http://localhost:4000/${id}`, {
          method: "DELETE"
        });
      
        const newRecords = records.filter((el) => el.level !== id);
        setRecords(newRecords);
      }
    
    // This following section will display the table with the records of individuals.
    return (
      <div>
        <h3>Record List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Level</th>
            </tr>
          </thead>
          <tbody>{recordList()}</tbody>
        </table>
      </div>
    );
   }