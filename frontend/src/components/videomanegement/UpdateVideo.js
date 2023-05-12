import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams} from 'react-router-dom';


export default function UpdateVideos() {

    const { id } = useParams();
    
    const [url,setUrl] = useState("");
    const [title,setTitle] = useState("");
    const [date,setDatePrevioud] = useState("");
    const [grade,setGrade]=useState("");

    if(!grade){
      console.log("Please select your grade")
    }

    if(!title){
      console.log("Please select your title")
    }
    
    useEffect(function () {

        function getVideo() {
            axios.get("http://localhost:3000/video/get/"+ id).then((res) => {
               
                setUrl(res.data.url);
                setTitle(res.data.title);
                setDatePrevioud(res.data.date);
                setGrade(res.data.grade);
                
            }).catch(function (err) {
                alert("data not fech");
                alert(err);
            });
        }
        getVideo();

    }, [id]);

    function SetDate() {
      // Get the current date in ISO format (yyyy-mm-dd)
      const currentDate = new Date().toISOString().slice(0, 10)
      // Set the date state and the value of the text input field to the current date
      setDatePrevioud(currentDate)
    }
  
    function updateData(e) {

        e.preventDefault();
        const updatedVideo = {
            url,
            date,
            title,
            grade
        }
        console.log(updatedVideo);
        axios.put("http://localhost:3000/video/update/" + id, updatedVideo).then(function () {

            alert("Video details Updated");

        }).catch(function (e) {

          alert("Video Details Not Updated");
          alert(e.err)
            
        })

    }

  return (
    <div class="bg-gradient-to-r from-[#000000] bg-red-800">

      <div class='text-center text-3xl text-white p-10 font-bold'>
        <br/>
      <h2 style={{color:"red"}}>Insert Update Data</h2>
      <br/>
      </div>
   
    
    <div class='flex justify-center'>
      <form class='border border-x-gray-50 p-18'>

        <div className="form-group">
          <div class='text-white'>
          <label>Video URL:</label>
        </div>
          <input
            type="text"
            className="form-control w-[800px]"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            readOnly
          />
        </div>
        <div className="form-group">
          <div class='text-white'>
          <label>Update Date:</label>
          </div>
          <input type='text'
             readOnly
            className="form-control w-[800px]"
            value={date}
            onChange={(event) => setDatePrevioud(event.target.value)}
          />
        </div>

        <div className="form-group">
        <br/>
          <input type="button" onClick={(e)=>SetDate()} className='rounded bg-black px-6 py-2 hover:bg-red-900 text-white' value={"select current date"}/>
          <br/>
        </div>

        <div className="form-group">
        <div class='text-white'>
          <label>Title:</label>
        </div>
          <input
            type="text"
            className="form-control w-[800px]"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>

       <br/>
        <div class="btn-group">
      <button type="button" className='rounded bg-black px-6 py-2 hover:bg-red-900 text-white'  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
       Select the grade related to the video
      </button>
      
       <div class="dropdown-menu dropdown-menu-right">
       <button class="dropdown-item" type="button"  style={{backgroundColor: "yellow"}}>Selected Grade Is-{grade}</button>
        <button class="dropdown-item" type="button" onClick={(e)=>setGrade(10)} >10</button>
        <button class="dropdown-item" type="button" onClick={(e)=>setGrade(11)} >11</button>
        <button class="dropdown-item" type="button" onClick={(e)=>setGrade(12)}>12</button>
        <button class="dropdown-item" type="button" onClick={(e)=>setGrade(13)}>13</button>
         </div>
      </div>

    <br/>
    <br/>
    <br/>
      <div class="flex justify-center">
        <center>
        <button type="submit" className='rounded bg-black px-6 py-2 hover:bg-red-900 text-white' onClick={updateData}>
          Update
        </button>
        </center>
        <br/>
      </div>
      </form>
      </div>
      <br/>
      <br/>
    </div>
  );
}
