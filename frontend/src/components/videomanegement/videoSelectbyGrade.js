import React from 'react'
import {Link} from 'react-router-dom'

export default function videoSelectbyGrade() {

  return (
    <div class="bg-gradient-to-r from-[#000000] bg-red-800 ">
      
      <center>
        <div class='text-center text-3xl text-white p-5 font-bold'>
        <label className='m-10' >Select Your Grade   </label>
        </div>
        </center>
        <br/>
        <br/>
        <center>
      <Link to="/grade10">
      <button type="button" className='rounded text-[80px] bg-black px-6 py-2 hover:bg-red-900 text-white w-[800px]' >GRADE 10</button>
      </Link>
      </center>
      <br/>
      <br/>
      <center>
      <Link to="/grade11">
      <button type="button"  className='rounded text-[80px] bg-black px-6 py-2 hover:bg-red-900 text-white w-[800px]' >GRADE 11 </button>
      </Link></center>
      <br/>
      <br/>

      <center>
      <Link to="/grade12">
      <button type="button"  className='rounded text-[80px] bg-black px-6 py-2 hover:bg-red-900 text-white w-[800px]' >GRADE 12</button>
      </Link></center>
      <br/>
      <br/>
      <center>
      <Link to="/grade13">
      <button type="button"  className='rounded text-[80px] bg-black px-6 py-2 hover:bg-red-900 text-white w-[800px]' >GRADE 13</button>
      </Link></center>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  )
}
