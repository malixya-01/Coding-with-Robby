import React,{useState} from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Addnotice (){

  const navigate = useNavigate();

    const [name,setName] = useState ("");
    const [date,setDate] = useState ("");
    const [discription,setDiscription] = useState ("");

    function sendData(e){
      e.preventDefault();  
        
      const newNotice={
        name,
        date,
        discription
      }

      axios.post("http://localhost:3000/notify/add",newNotice).then(()=>{
        alert("Notice added")

        setName("");
        setDate("");
        setDiscription("");
         
      }).catch((err)=>{
        alert(err)
      })


     
    }



    return( 

      <Form onSubmit={sendData} className="d-flex justify-content-center align-items-center flex-column mt-5 mb-5  p-5 shadow-lg bg-white rounded  border border-dark  border-3">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="Name" placeholder="Notiset" onChange={(e)=>{
          setName(e.target.value)}} />
        <Form.Text className="text-muted">
      
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" placeholder="" onChange={(e)=>{
          setDate(e.target.value)}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Discription</Form.Label>
        <Form.Control type="Discription" placeholder="Discription" onChange={(e)=>{
          setDiscription(e.target.value)}}/>
        <Form.Text className="">
          Shere your Notice
        </Form.Text>
      </Form.Group>
      <div class="p-11">
    <center>
  <button type="submit" className='text-white rounded bg-black px-6 py-2 hover:bg-red-900 p-28'
  >Submit</button>
  </center>
  </div>
    </Form>
       
//         <div class="bg-gradient-to-r from-[#000000] bg-red-800 flex justify-center p-[185px]">
//             <form onSubmit={sendData}  class='border border-x-gray-50 p-10'>
//   <div className="form-group">

//     <div class="text-white font-bold">
//     <label for="name">Notice name</label>
//     </div>
//     <input type="text" className="form-control w-[900px]" id="name" aria-describedby="emailHelp" placeholder="Enter notice" onChange={(e)=>{
//         setName(e.target.value);
        
//     }} required/>
   
//   </div>

//   <div className="form-group">
//     <div class = "text-white font-bold">
//     <label for="date">Notice date</label>
//     </div>
//     <input type="date" className="form-control" id="age" aria-describedby="emailHelp" placeholder="Enter notice date" onChange={(e)=>{
//         setDate(e.target.value);
        
//     }}required/>
  
//   </div>

//   <div className="form-group">
//   <div class = "text-white font-bold">
//     <label for="discreption">Notice discreption</label>
//     </div>
//     <textarea  rows="10" cols="120" onChange={(e)=>{
//         setDiscription(e.target.value);
//     }}required/>
   
    
//   </div>
//  <div class="p-11">
//     <center>
//   <button type="submit" className='text-white rounded bg-black px-6 py-2 hover:bg-red-900 p-28'>Submit</button>
//   </center>
//   </div>
// </form>
//         </div>
    )
}
