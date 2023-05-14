import React from "react"
import { Link } from "react-router-dom"


export default function header() {
  return ( 
<div class="bg-gradient-to-r from-[#000000] bg-red-800 p-80">

  <div>
     <h1 class="text-white text-left">ICT from Abc</h1>
  </div>

<div>
  <Link to="/addVideo">
  <h2 class="text-white bg-black p-10 rounded text-center m-14">Add videos</h2>
  </Link>
</div>


<div>
  <Link to='/show'>
  <h2 class="text-white bg-black p-10 rounded text-center m-14">Show all details</h2>
  </Link>
</div>

<div>
  <Link to="/selectGrade">
  <h2 class="text-white bg-black p-10 rounded text-center m-14 h-8 w-10">Watch videos</h2>
  </Link>
</div>

  </div>
  )
}
