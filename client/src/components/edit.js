import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
 
export default function Edit() {
 const [form, setForm] = useState({
  name: "",
  phoneNumber: "",
  gtEmail: "",
  date:"",
  leavingTimeFrom:"",
  leavingTimeTo:"",
  flightTime:"",
  location:"",
  comment:"",
   records: [],
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:4000/record/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record = await response.json();
     if (!record) {
       window.alert(`Record with id ${id} not found`);
       navigate("/");
       return;
     }
 
     setForm(record);
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
   e.preventDefault();
   const editedPerson = {
     name: form.name,
     phoneNumber: form.phoneNumber,
     gtEmail: form.gtEmail,
     date:form.date,
     leavingTimeFrom:form.leavingTimeFrom,
     leavingTimeTo:form.leavingTimeTo,
     flightTime:form.flightTime,
     location:form.location,
     comment:form.comment

   };
 
   // This will send a post request to update the data in the database.
   await fetch(`http://localhost:4000/update/${params.id}`, {
     method: "POST",
     body: JSON.stringify(editedPerson),
     headers: {
       'Content-Type': 'application/json'
     },
   });
 
   navigate("/");
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
   <div>
     <h3>Update Record</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">Name: </label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="phoneNumber">Phone Number: </label>
         <input
           type="text"
           className="form-control"
           id="phoneNumber"
           value={form.phoneNumber}
           onChange={(e) => updateForm({ phoneNumber: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="gtEmail">GT Email:</label>
         <input
          placeholder="xxx@gatech.edu"
           type="text"
           className="form-control"
           id="gtEmail"
           value={form.gtEmail}
           onChange={(e) => updateForm({ gtEmail: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="date">Date:</label>
         <input
           type="text"
           className="form-control"
           id="date"
           value={form.date}
           onChange={(e) => updateForm({ date: e.target.value })}
         />
       </div>
       <p>Leaving Time Range:</p>
       <div className="leaveTimeBox">
       <div className="form-group">
         <label htmlFor="leavingTimeFrom">from</label>
         <select type="text"
           className="form-control"
           id="leavingTimeFrom"
           value={form.leavingTimeFrom}
           onChange={(e) => updateForm({ leavingTimeFrom: e.target.value })}>
            <option value="24:00">24:00</option>
                          <option value="24:30">24:30</option>
                          <option value="01:00">01:00</option>
                          <option value="01:30">01:30</option>
                          <option value="02:00">02:00</option>
                          <option value="02:30">02:30</option>
                          <option value="03:00">03:00</option>
                          <option value="03:30">03:30</option>
                          <option value="04:00">04:00</option>
                          <option value="04:30">04:30</option>
                          <option value="05:00">05:00</option>
                          <option value="05:30">05:30</option>
                          <option value="06:00">06:00</option>
                          <option value="06:30">06:30</option>
                          <option value="07:00">07:00</option>
                          <option value="07:30">07:30</option>
                          <option value="08:00">08:00</option>
                          <option value="08:30">08:30</option>
                          <option value="09:00">09:00</option>
                          <option value="09:30">09:30</option>
                          <option value="10:00">10:00</option>
                          <option value="10:30">10:30</option>
                          <option value="11:00">11:00</option>
                          <option value="11:30">11:30</option>
                          <option value="12:00">12:00</option>
                          <option value="12:30">12:30</option>
                          <option value="13:00">13:00</option>
                          <option value="13:30">13:30</option>
                          <option value="14:00">14:00</option>
                          <option value="14:30">14:30</option>
                          <option value="15:00">15:00</option>
                          <option value="15:30">15:30</option>
                          <option value="16:00">16:00</option>
                          <option value="16:30">16:30</option>
                          <option value="17:00">17:00</option>
                          <option value="17:30">17:30</option>
                          <option value="18:00">18:00</option>
                          <option value="18:30">18:30</option>
                          <option value="19:00">19:00</option>
                          <option value="19:30">19:30</option>
                          <option value="20:00">20:00</option>
                          <option value="20:30">20:30</option>
                          <option value="21:00">21:00</option>
                          <option value="21:30">21:30</option>
                          <option value="22:00">22:00</option>
                          <option value="22:30">22:30</option>
                          <option value="23:00">23:00</option>
                          <option value="23:30">23:30</option>
           </select>
       </div>
      
       <div className="form-group">
         <label htmlFor="leavingTimeTo">to</label>
         <select type="text"
           className="form-control"
           id="leavingTimeTo"
           value={form.leavingTimeTo}
           onChange={(e) => updateForm({ leavingTimeTo: e.target.value })}>
            <option value="24:00">24:00</option>
                          <option value="24:30">24:30</option>
                          <option value="01:00">01:00</option>
                          <option value="01:30">01:30</option>
                          <option value="02:00">02:00</option>
                          <option value="02:30">02:30</option>
                          <option value="03:00">03:00</option>
                          <option value="03:30">03:30</option>
                          <option value="04:00">04:00</option>
                          <option value="04:30">04:30</option>
                          <option value="05:00">05:00</option>
                          <option value="05:30">05:30</option>
                          <option value="06:00">06:00</option>
                          <option value="06:30">06:30</option>
                          <option value="07:00">07:00</option>
                          <option value="07:30">07:30</option>
                          <option value="08:00">08:00</option>
                          <option value="08:30">08:30</option>
                          <option value="09:00">09:00</option>
                          <option value="09:30">09:30</option>
                          <option value="10:00">10:00</option>
                          <option value="10:30">10:30</option>
                          <option value="11:00">11:00</option>
                          <option value="11:30">11:30</option>
                          <option value="12:00">12:00</option>
                          <option value="12:30">12:30</option>
                          <option value="13:00">13:00</option>
                          <option value="13:30">13:30</option>
                          <option value="14:00">14:00</option>
                          <option value="14:30">14:30</option>
                          <option value="15:00">15:00</option>
                          <option value="15:30">15:30</option>
                          <option value="16:00">16:00</option>
                          <option value="16:30">16:30</option>
                          <option value="17:00">17:00</option>
                          <option value="17:30">17:30</option>
                          <option value="18:00">18:00</option>
                          <option value="18:30">18:30</option>
                          <option value="19:00">19:00</option>
                          <option value="19:30">19:30</option>
                          <option value="20:00">20:00</option>
                          <option value="20:30">20:30</option>
                          <option value="21:00">21:00</option>
                          <option value="21:30">21:30</option>
                          <option value="22:00">22:00</option>
                          <option value="22:30">22:30</option>
                          <option value="23:00">23:00</option>
                          <option value="23:30">23:30</option>
           </select>
       </div>
       </div>
       
       <div className="form-group">
         <label htmlFor="flightTime">Time of Flight:</label>
         <input
           type="text"
           className="form-control"
           id="flightTime"
           value={form.flightTime}
           onChange={(e) => updateForm({ flightTime: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="location">On Campus Location:</label>
         <select type="text"
           className="form-control"
           id="location"
           value={form.location}
           onChange={(e) => updateForm({ location: e.target.value })}>
            <option value="East" >East</option>
            <option value="West">West</option>
           </select>
        
       </div>

       <div className="form-group">
         <label htmlFor="comment">Comments:</label>
         <textarea type="text"
           className="form-control"
           id="comment"
           value={form.comment}
           onChange={(e) => updateForm({ comment: e.target.value })}>
           </textarea>

       </div>
       
 
       <div className="form-group">
         <input
           type="submit"
           value="Update Record"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}