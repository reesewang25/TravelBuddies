import React, { useState } from "react";
import { useNavigate } from "react-router";
import * as recent from "./mostRecent"

 
export default function Create() {
 const [form, setForm] = useState({
   name: "",
   phoneNumber: "",
   gtEmail: "",
   date:"",
   leavingTimeFrom:"",
   leavingTimeTo:"",
   flightTime:"",
   location:"",
   comment:""
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newPerson = { ...form };
 
   await fetch("http://localhost:4000/record/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPerson),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
   recent.globalArray[0]=form.date;

   setForm({ name: "",
   phoneNumber: "",
   gtEmail: "",
   date:"",
   leavingTimeFrom:"",
   leavingTimeTo:"",
   flightTime:"",
   location:"",
   comment:"" });
   
   navigate("/recommend");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Create New Record</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">Name</label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="phoneNumber">Phone Number:</label>
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
           value="GO"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}