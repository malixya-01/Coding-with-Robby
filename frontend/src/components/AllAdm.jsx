import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

 
const Record = (props) => (
 <tr>
   <td>{props.record.aid}</td>
   <td>{props.record.name}</td>
   <td>{props.record.username}</td>
   <td>{props.record.phone}</td>
   <td>
     <Link className="btn btn-link" style={{textDecoration:"none"}} to={`/updateAdm/${props.record._id}`}>Update</Link> |
     <button className="btn btn-link" style={{textDecoration:"none"}}
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
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://localhost:3000/admin/`);
 
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
  function deleteRecord(id, username) {
    axios.delete(`http://localhost:3000/admin/delete/${id}`).then(()=>{
      alert("admin removed")
  }).catch((err)=>{
      alert(err)
  })
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
   <div className="all">
     <h3 style={{textAlign:"left", fontSize:"40px", marginTop: 30, marginLeft: 50, fontFamily:"poppins", fontWeight:"bold"}}>Employees</h3>
     <button className="new rounded-5" style={{alignItems:"right", marginTop: 30, marginLeft: 50}}>
               <a style={{textDecoration:"none", color:"black"}} href="/addAdm"> Add new Admin </a>
     </button>
     <table className="table" style={{marginTop: 30, marginLeft: 50, border:"transparent"}}>
       <thead>
         <tr>
           <th style={{fontFamily:"poppins" , color:"black", fontSize:"25px"}}>ID</th>
           <th style={{fontFamily:"poppins" , color:"black", fontSize:"25px"}}>Name</th>
           <th style={{fontFamily:"poppins" , color:"black", fontSize:"25px"}}>Username</th>
           <th style={{fontFamily:"poppins", color:"black", fontSize:"25px"}}>Phone</th>
         </tr>
       </thead>
       <tbody className="data" style={{fontFamily:"poppins", fontSize:"20px"}}>{recordList()}</tbody>
     </table>
   </div>
 );
}