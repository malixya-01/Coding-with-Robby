import React, { useState } from 'react'
import axios from 'axios'
import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
import "./AllVideos.css"


const firebaseConfig = {
    apiKey: "AIzaSyC1sDj1Z5jBRUywLBkQlOVyv94-cao_Vkc",
    authDomain: "videosupload-a2688.firebaseapp.com",
    projectId: "videosupload-a2688",
    storageBucket: "videosupload-a2688.appspot.com",
    messagingSenderId: "1075248999826",
    appId: "1:1075248999826:web:1e21b471293cf7ec5ee54b",
    measurementId: "G-8CEVCYGGQE"
}

firebase.initializeApp(firebaseConfig)
const storageRef = firebase.storage().ref()

export default function AddVideos() {

  const [date, setCurrentDate] = useState('')
  const [title, setTitle] = useState('')
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [setUrl,setVideoUrl] = useState('')
  const [grade,gradeSelect]=useState('')

  async function addData(e) {
    e.preventDefault()
    
    if (!selectedVideo) {
      alert('Please select a video file')
      return
    }
    
    try {
      // Upload video to Firebase Storage
      const videoRef = storageRef.child(selectedVideo.name)
      await videoRef.put(selectedVideo)
      console.log('Video uploaded successfully')
 
      // Get the download URL of the uploaded video
      const downloadUrl = await videoRef.getDownloadURL()
        setVideoUrl(downloadUrl)
      console.log('Download URL:', downloadUrl)
      
      console.log('Sending video details to server...')
      const newVideo = {
        url: downloadUrl,
        date,
        title,
        grade
      }
      
      // Send video details along with download URL to server
      await axios.post('http://localhost:3000/video/add', newVideo)
      console.log('Video details added successfully')
      
      alert('Video uploaded successfully')
    } catch (error) {
      console.error(error)
      alert('Failed to upload video')
    }
  }

  function SetDate() {
    // Get the current date in ISO format (yyyy-mm-dd)
    const currentDate = new Date().toISOString().slice(0, 10)
    // Set the date state and the value of the text input field to the current date
    setCurrentDate(currentDate)
  }

  function handleVideoChange(e) {
    setSelectedVideo(e.target.files[0])
  }

  return (
    
    <div class="bg-gradient-to-r from-[#000000] bg-red-800 p-15">
      <div class='text-center text-3xl text-white p-8 font-bold'>
      <label>Enter Video Information</label>
      </div>   
      <div class='flex justify-center'>  
      <form onSubmit={addData} class='border border-x-gray-50 p-10'>
        <div className='form-group'>
          <div class='text-white'>
          <label  >Video URL</label>
          </div>
          <input
            type='text'
            className='form-control w-[800px]'
            aria-describedby='emailHelp'
            placeholder='It will automatically select'
            readOnly
            value={setUrl}
          />
        </div>

        <div className='form-group' >
          <div class='text-white'>
          <label htmlFor='exampleInputPassword1'>Current-Date</label>
          </div>
          <input
            type="date"
            value={date}
            className='form-control'
            id='date'
            readOnly
            placeholder='Press Set current Date Button'
            name='date'
          />

          <br />

          <button type='button' className='px-6 py-2 text-white bg-black rounded hover:bg-red-900'  onClick={SetDate}>
            Set Current Date
          </button>

          <br/>
          <br />
        </div>
        <div className='form-group'>
        <div class='text-white'>
          <label htmlFor='exampleInputPassword1'>Title</label>
        </div>
          <input
            type='text'
            className='form-control'
            placeholder='Video Title'
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          />
        </div>

            <br/>
            <br/>

      <div class="btn-group">
      <button type="button" class="rounded bg-black px-6 py-2 hover:bg-red-900 text-white" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
       Select the grade related to the video
      </button>

       <div class="dropdown-menu dropdown-menu-right ">
       <button class="dropdown-item " type="button" style={{ backgroundColor: 'yellow' }}>Select Your Grade</button>
        <button class="dropdown-item " type="button" onClick={()=>{gradeSelect(10)}}>10</button>
        <button class="dropdown-item " type="button" onClick={()=>{gradeSelect(11)}}>11</button>
        <button class="dropdown-item " type="button" onClick={()=>{gradeSelect(12)}}>12</button>
        <button class="dropdown-item " type="button" onClick={()=>{gradeSelect(13)}}>13</button>
         </div>
      </div>
            
            <br/>
            <br/>
            <br/>
        <div className='form-group'>
        <div class='text-white'>
          <label htmlFor='exampleInputPassword1'>Select Your Video</label>
        </div> 
            <input
            style={{ backgroundColor: '#ff0000' }}
              type='file'
              className='form-control-file'
              accept="video/*"
              id='fileUpload'
              onChange={handleVideoChange}
            />
        </div>
        <br/>

        <center>
        <button type='submit' className='px-6 py-2 text-white bg-black rounded hover:bg-red-900'>
          Submit
        </button>
        </center>
      </form>
      </div>
   </div>
  )
}
