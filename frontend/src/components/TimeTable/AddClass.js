import {useNavigate} from "react-router-dom"
import React, {useState} from "react";
import axios from "axios";

export default function AddClass(){

  const [classname, setClassName] = useState("");
  const [grade, setGrade] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [link, setLink] = useState("");
  const navigate = useNavigate();

  function sendData(e){
    e.preventDefault();
    
    const newClass ={
      classname,
      grade,
      date,
      time,
      link
    }
    axios.post("http://localhost:3000/time/add",newClass).then(()=>{
      alert("Class Added")
      setClassName("");
      setGrade("");
      setDate("");
      setTime("");
      setLink("");
      
    }).catch((err)=>{
      alert(err)
    })

    navigate('/')
    
  
  }

  

    return(
        //class create form
        
        <div className="container" style={{width: '80%', float: 'right'}}>

          <br></br>
          <br></br>
          <h2>Create Class</h2>
          <br></br>
          <br></br>



        <div className="mb-3 row">
          <label for="classname" className="col-sm-2 col-form-label">Class</label>
          <div className="col-sm-10">
          <input type="text" className="form-control" id="classname" placeholder="Class Name" 
          onChange={(e)=>{

            setClassName(e.target.value);

          }}/>
          </div>
        </div>

        <div className="mb-3 row">
          <label for="grade" className="col-sm-2 col-form-label">Grade</label>
          <div className="col-sm-10">
          <input type="text" className="form-control" id="grade" placeholder="Grade"
          onChange={(e)=>{

            setGrade(e.target.value);

          }}/>
          </div>
        </div>

        <div className="mb-3 row">
          <label for="date" className="col-sm-2 col-form-label">Date</label>
          <div className="col-sm-10">
          <input type="date" className="form-control" id="date" placeholder="Date"
          onChange={(e)=>{

            setDate(e.target.value);

          }}/>
          </div>
        </div>

        <div className="mb-3 row">
          <label for="time" className="col-sm-2 col-form-label">Time</label>
          <div className="col-sm-10">
          <input type="time" className="form-control" id="time" placeholder="Time"
          onChange={(e)=>{

            setTime(e.target.value);

          }}/>
          </div>
        </div>

        <div className="mb-3 row">
          <label for="link" className="col-sm-2 col-form-label">Link</label>
          <div className="col-sm-10">
          <input type="url" className="form-control" id="link" placeholder="Online Class Link"
          onChange={(e)=>{

            setLink(e.target.value);

          }}/>
          </div>
        </div>

        <button type="submit" className="btn btn-primary" onClick={sendData} >Submit</button>
      
        </div>
      
    )
    
}