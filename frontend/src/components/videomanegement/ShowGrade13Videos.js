import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import './AllVideos.css'

export default function ShowGrade13Videos() {

  const [allGrade13, setGrade13] = useState([]);

  useEffect(() => {
    function getVideo() {
      axios.get('http://localhost:3000/video/')
        .then((res) => {
          var videoGrade13 = res.data.filter((video) => video.grade === 13);
          setGrade13(videoGrade13);
        })
        .catch((error) => {
          console.log(error);
          alert('Error');
        });
    }
    getVideo();
  }, []);

  function updatedViews(id, item) {
    const views = item + 1;
    const updatedGrade13 = allGrade13.map((video) => {
      if (video._id === id) {
        return { ...video, views };
      }
      return video;
    });
    setGrade13(updatedGrade13);
    viewI(id, views);
  }

  function viewI(id, views) {
    const updatedData = { views };
    axios.put(`http://localhost:3000/video/update/${id}`,updatedData)
      .then(() => {
        //alert("views updated successfully");
      })
      .catch((error) => {
        console.log(error);
        alert('Error');
      });
  }

  return (
    <div className="p-[30px] bg-gradient-to-r from-[#000000] bg-red-800">
      <div>
         <h1 class="text-white p-2 text-[20px] font-bold">Video Lesson Grade 13</h1>
      </div>

      <table className="table table-white text-left bg-gradient-to-r from-[#000000] bg-red-800">
        
        <tbody>
          {allGrade13.map((video) => (
            <tr key={video._id}>
              <td>
                <ReactPlayer url={video.url} controls onEnded={() => updatedViews(video._id, video.views)} style={{backgroundColor: '#343434' }}></ReactPlayer>
              </td>
              <td>
                <h2 className='bg-black text-[30px] text-white'><b>{video.title}</b></h2>
                <br />
                <h2 class='text-white'>Upload date:{video.date}</h2>
                <h2 class='text-white'> Views: {video.views}</h2>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
