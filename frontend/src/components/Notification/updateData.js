import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function UpdateData() {

    const[name,setName]=useState("")
    const[date,setDate]=useState("")
    const[discription,setDis]=useState("")

    const {id} =useParams();

        useEffect(()=>{
           
            function getData(){

                axios.get("http://localhost:3000/notify/"+id).then((res)=>{
                    setName(res.data.name)
                    setDate(res.data.date)
                    setDis(res.data.discription)
                }).catch((err)=>{
                   alert(err)
                })                
            }
             getData();
           },[id])

           function UpdateData(){

            const updatedData={
                    name,
                    date,
                    discription,
            };
                 axios.put("http://localhost:3000/notify/update/"+id,updatedData).then(()=>{
                     alert("Update Success")
                 }).catch((err)=>{
                     alert(err)
                 })
           }
  
  return (
    <div class="bg-gradient-to-r from-[#000000] bg-red-800 flex justify-center p-[185px]">

<div className="container">
            <form onSubmit={UpdateData}  class='border border-x-gray-50 p-10'>
  <div className="text-white font-bold">

    <label for="name">Notice name</label>
    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter notice" value={name || ""} onChange={(e)=>{
        setName(e.target.value);
        

    }}required/>
   
  </div>

  <div className="form-group">
    
    <div class = "text-white font-bold">
    <label for="date">Notice date</label>
    </div>
    <input type="date" className="form-control" id="age" aria-describedby="emailHelp" placeholder="Enter notice date"
     onChange={(e)=>{
        setDate(e.target.value);
    }}value={date || ""} required/>
    
  </div>

  <div className="form-group">
    <div class = "text-white font-bold">
    <label for="discreption">Notice discreption</label>
    </div>
    <textarea  rows="10" cols="124"  onChange={(e)=>{
        setDis(e.target.value)
        

    }}value = {discription  || " "} required/>
   
  </div>
  <div class="p-11">
    <center>
  <button type="update" className='text-white rounded bg-black px-6 py-2 hover:bg-red-900 p-28'>Update</button>
  </center>
  </div>


 
  
</form>
        </div>
      
    </div>
  )
}
