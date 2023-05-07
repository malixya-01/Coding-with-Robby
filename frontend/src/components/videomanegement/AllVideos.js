import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './AllVideos.css'
import jsPDF from "jspdf";
import "jspdf-autotable";

//import {Link} from 'react-router-dom'

export default function AllVideos() {
  const [videos, setVideos] = useState([]);
  const [SearchItems, setSearch] = useState("");
  const doc = new jsPDF();

  useEffect(() => {
    function getVideo() {
      axios
        .get('http://localhost:3000/video/')
        .then((res) => {
          
          console.log(res.data);
          setVideos(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    getVideo();
  }, []);

  const deleteVideo = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/video/delete/${id}`);
      setVideos(videos.filter((item) => item.id !== id));
     // alert('Data deleted successfully');
      window.location.reload(); //data deleted after that page will refresh automatically
    } catch (error) {
      alert('Error deleting data', error);
      console.log(error);
    }
  };

  const filteredVideos = videos.filter((item) => {
    return item.title.toLowerCase().includes(SearchItems.toLowerCase());
  });

  const generateReport = () => {
  
    const columns = [
      
      "Video Upload Date",
      "Video Lesson",
      "Video views",
      "Grade",
    ];
    const rows = videos.map(
      ({
      
        date,
        title,
        views,
        grade,
      }) => [
      
        date,
        title,
        views,
        grade,
      ]
    );
    doc.autoTable({
      head: [columns],
      body: rows,
    });

    doc.save("Applicants.pdf");
  
}

  return (
    <div >
      <div class="form-group" style={{ width: '800px' ,textAlign: 'center' }} >
      <br/>
      <br/>
          <input type='text' placeholder='Enter video title for searching' class="form-control"  onChange={(e)=>{setSearch(e.target.value)}}></input>
      </div>
      <br/>
      <br/>


      <table className="table table-dark" style={{ width: '80%', margin: 'auto', backgroundImage: 'url(background.jpg)', backgroundSize: 'cover' }}> 
          <tr>
            <th>URL</th>
            <th>Date</th>
            <th>Video title</th>
            <th>Grade</th>
            <th>Views</th>
            <th>Action</th>
            <th>Action</th>
          </tr>
        
        <tbody>
          {filteredVideos.map((item, index) => (
            <tr key={index}>
              <td>{item.url}</td>
              <td>{item.date}</td>
              <td>{item.title}</td>
              <td>{item.grade}</td>
              <td>{item.views}</td>
              <td>
                <a href={'/update1/'+item._id}><button class="btn btn-success btn-rounded">Update</button></a>
              </td>
              <td>
                <button
                  class="btn btn-warning btn-rounded"
                  onClick={() => deleteVideo(item._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
 
 <div style={{textAlign: 'center' }}>
      <button class="rounded bg-black px-6 py-2 hover:bg-red-900 text-white " onClick={(e)=>{generateReport()}}>Genarate Report</button>
    </div>
    </div>
  );
}
