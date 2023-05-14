import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Chart } from "react-google-charts";


export default function GraphAboutViews() {

    const[grade10Views,setGrade10Views]=useState([])
    const[grade11Views,setGrade11Views]=useState([])
    const[grade12Views,setGrade12Views]=useState([])
    const[grade13Views,setGrade13Views]=useState([])

   useEffect(()=>{
     const fetchData =async()=>{
      axios.get('http://localhost:3000/video/').then((res)=>{

      var videoGrade10 = res.data.filter((video) => video.grade === 10);
      setGrade10Views(videoGrade10);

      var videoGrade11 = res.data.filter((video) => video.grade === 11);
      setGrade11Views(videoGrade11);

      var videoGrade12= res.data.filter((video) => video.grade === 12);
      setGrade12Views(videoGrade12);

      var videoGrade13= res.data.filter((video) => video.grade === 13);
      setGrade13Views(videoGrade13);

  }).catch((err)=>{
      alert(err.message+"Cannot get Video details");
  })
     }
     fetchData()
   },[])

   const chartData10= [['VideoTitle', 'Views']];
  grade10Views.forEach((video) => {
    chartData10.push([video.title, video.views]);
  });

  const chartData11= [['VideoTitle', 'Views']];
  grade11Views.forEach((video) => {
    chartData11.push([video.title, video.views]);
  });

  const chartData12= [['VideoTitle', 'Views']];
  grade12Views.forEach((video) => {
    chartData12.push([video.title, video.views]);
  });

  const chartData13= [['VideoTitle', 'Views']];
  grade13Views.forEach((video) => {
    chartData13.push([video.title, video.views]);
  });
 
  return (
   <div>

    <br/> 
    <h2 style={{color:'red'}}><center><u><i>Summary Of the Video Lessons</i></u></center></h2>
    <br/>
    <table>
      <tr>
        <td>
      <Chart
        width={'600px'}
        height={'400px'}
        chartType="PieChart"
        data={chartData10}
        options={{
          title: 'Grade 10',
        }}
      />
      </td>

      <td>
      <Chart
       width={'600px'}
       height={'400px'}
        chartType="PieChart"
        data={chartData11}
        options={{
          title: 'Grade 11',
        }}
      />
   </td>
   </tr>

  <tr>
    <td>
      <Chart
       width={'600px'}
       height={'400px'}
        chartType="PieChart"
        data={chartData12}
        options={{
          title: 'Grade 12',
        }}
      />
     </td>  

     <td>
      <Chart
        width={'600px'}
        height={'400px'}
        chartType="PieChart"
        data={chartData13}
        options={{
          title: 'Grade 13',
        }}
      />
      </td>
      </tr>
    </table>
    </div>
  )
}
