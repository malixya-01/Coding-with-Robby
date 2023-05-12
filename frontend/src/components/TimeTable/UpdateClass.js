
import { useParams, useNavigate } from "react-router-dom"
import React, { useEffect } from "react";

export default function UpdateClass(){

  const [classname, setClassName] = React.useState("");
  const [grade, setGrade] = React.useState("");
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");
  const [link, setLink] = React.useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    getClassDetails();
  },[])

  

  const getClassDetails = async ()=>{
    console.warn(params)
    let result = await fetch(`http://localhost:3000/time/get/${params.id}`);
    result = await result.json();
    setClassName(result.classname);
    setGrade(result.grade);
    setDate(result.date);
    setTime(result.time);
    setLink(result.link);
  }



  const updateClass = async () =>{
    console.warn(classname,grade,date,time,link)
    let result = await fetch(`http://localhost:3000/time/update/${params.id}`,{
      method:'put',
      body:JSON.stringify({classname,grade,date,time,link}),
      headers:{
        'Content-Type':'Application/json'
      }

    });
    result = await result.json()
    if(result){
      navigate('/')
    }
    
  }
  


  

    return(
        //class create form
        
        <div className="container" style={{width: '80%', float: 'right'}}>

          <br></br>
          <br></br>
          <h2>Update Class</h2>
          <br></br>
          <br></br>



        <div className="mb-3 row">
          <label for="classname" className="col-sm-2 col-form-label">Class</label>
          <div className="col-sm-10">
          <input type="text" className="form-control" id="classname" placeholder="Class Name" 
          value={classname}
          onChange={(e)=>{

            setClassName(e.target.value);

          }}/>
          </div>
        </div>

        <div className="mb-3 row">
          <label for="grade" className="col-sm-2 col-form-label">Grade</label>
          <div className="col-sm-10">
          <input type="text" className="form-control" id="grade" placeholder="Grade"
          value={grade}
          onChange={(e)=>{

            setGrade(e.target.value);

          }}/>
          </div>
        </div>

        <div className="mb-3 row">
          <label for="date" className="col-sm-2 col-form-label">Date</label>
          <div className="col-sm-10">
          <input type="date" className="form-control" id="date" placeholder="Date"
          value={date}
          onChange={(e)=>{

            setDate(e.target.value);

          }}/>
          </div>
        </div>

        <div className="mb-3 row">
          <label for="time" className="col-sm-2 col-form-label">Time</label>
          <div className="col-sm-10">
          <input type="time" className="form-control" id="time" placeholder="Time"
          value={time}
          onChange={(e)=>{

            setTime(e.target.value);

          }}/>
          </div>
        </div>

        <div className="mb-3 row">
          <label for="link" className="col-sm-2 col-form-label">Link</label>
          <div className="col-sm-10">
          <input type="url" className="form-control" id="link" placeholder="Online Class Link"
          value={link}
          onChange={(e)=>{

            setLink(e.target.value);

          }}/>
          </div>
        </div>

        <button type="submit" className="btn btn-primary" onClick={updateClass}>Update</button>
      
        </div>
      
    )
    
}


