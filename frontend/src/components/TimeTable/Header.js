
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Header(){
  const [value, onChange] = useState(new Date());
    return(


      <nav class="navbar navbar-expand-lg navbar-dark bg-dark"style={{width: '300px', float: 'left',height:'auto', minHeight:'calc(100vh)', position:'fixed'}} >
  <div class="sidebar_content" >
  
  
    <div class="navbar-brand"  style={{color: 'red',float:''}}><i class="fa fa-graduation-cap" aria-hidden="true"></i><h>Class Management Dashboard</h></div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    
      
        <br></br>
      
        <div className='nav-option option1 ' style={{display:'flex',flexDirection:'column', alignItems:'center', padding:'0px', gap:'20px'}}>
          <Link to="/" className="nav-link" ><i class="fa fa-home" aria-hidden="true"></i><h> Home</h></Link>
        </div>
      
      <br></br>
      
      <div className='nav-option option1' style={{display:'flex',flexDirection:'column', alignItems:'center', padding:'0px', gap:'20px'}}>
        <Link to="/add" className="nav-link"><i class="fa fa-plus" aria-hidden="true"></i><h> Create Class</h></Link>
        </div>
      
      <br></br>
      
      <div className='nav-option option1' style={{display:'flex',flexDirection:'column', alignItems:'center', padding:'0px', gap:'20px'}}>
          <Link to="/table" className="nav-link"><i class="fa fa-table" aria-hidden="true"></i><h> Time Table</h></Link>
        </div>

      <br></br>

      <div className='nav-option option1' style={{display:'flex',flexDirection:'column', alignItems:'center', padding:'0px', gap:'20px'}}>
          <Link to="/schedule" className="nav-link"><i class="fa fa-calendar-check-o" aria-hidden="true"></i><h> Day Schedule</h></Link>
        </div>
        <br></br>
        <br></br>
        <br></br>
        

        <div  style={{width: '250px'}}>
      <Calendar style={{Color:'red'}} onChange={onChange} value={value} />
    </div>
    
      
        
      </div>

     
      
      
    
    
  
</nav>
  
    )
}
export default Header;
