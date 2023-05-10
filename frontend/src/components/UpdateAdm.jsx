import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

 
export default function Edit() {
 const [form, setForm] = useState({
   aid: "",
   name: "",
   username: "",
   password: "",
   phone:"",
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:3000/admin/get/${params.id.toString()}`);
 
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
     aid: form.aid,
     name: form.name,
     username: form.username,
     password: form.password,
     phone: form.phone,
   };
 
   // This will send a post request to update the data in the database.
   await fetch(`http://localhost:3000/admin/update/${params.id}`, {
     method: "PUT",
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
     <h3 style={{textAlign:"center", marginTop:40, fontFamily:"poppins", fontWeight:"bold"}}>Update Admin Details</h3>
     <form className='d-flex justify-content-center align-items-center flex-column p-5 shadow-lg rounded-5' onSubmit={onSubmit}>
       <div className="form-group">
       <div className="form-group">
         <label htmlFor="position">ID: </label>
         <input type="text" className="form-control" id="position" placeholder="Update ID"
           value={form.aid}
           required
           onChange={(e) => updateForm({ aid: e.target.value })}
         />
       </div>
         <label htmlFor="name">Name: </label>
         <input
           type="text"
           className="form-control"
           id="name"
           placeholder="Update Name"
           value={form.name}
           required
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="position">Username: </label>
         <input type="text" className="form-control" id="position" placeholder="Update Username"
           value={form.username}
           required
           onChange={(e) => updateForm({ username: e.target.value })}
         />
       </div>
       
       <div className="form-group">
         <label htmlFor="position">Password: </label>
         <input
           type="password"
           className="form-control"
           id="position"
           placeholder="Update Password"
           value={form.password}
           required
           onChange={(e) => updateForm({ password: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="position">Phone: </label>
         <input type="text" className="form-control" id="position" placeholder="7xxxxxxxx" pattern="[0-9]{9}" 
           value={form.phone}
           required
           onChange={(e) => updateForm({ phone: e.target.value })}
         />
       </div>
       <br />
 
       <div className="form-group">
         <input
           type="submit"
           value="UPDATE"
           className="btnn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}