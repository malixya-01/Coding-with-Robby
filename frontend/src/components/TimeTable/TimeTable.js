import React, {useState, useEffect} from 'react';
import axios from "axios";

export default function TimeTable(){
    const[classes, setClasses] = useState([]);
    const[search, setsearch] = useState([]);
    const[clockState, setClockState] = useState();
    const[dateState, setDateState] = useState();
    console.log(search)
    
    

    useEffect(()=>{
        function getClasses() {
            axios.get("http://localhost:3000/time/").then((res)=>{
               setClasses(res.data);
               console.log(res);
        }).catch((err)=>{
            alert(err.message);
        })
        }
        getClasses();

        setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString());
            setDateState(date.toLocaleDateString());
        }, 1000);
    
    } ) 



  
    
   
   


    return(
        
        <div className="container" style={{width: '80%', float: 'right'}}>
            <br></br>
            <h1>Online Class Time Table</h1>
            <br></br>
            <div ><span class="p-3 mb-3 border border-danger body rounded" style={{fontSize:'20px'}}><b>Time:</b> {clockState}  <b style={{color:'#bc0000'}}> | </b>  <b>Date:</b> {dateState}</span>
            
            
            <br></br>
            <br></br>
            <br></br>
         

            <form class="d-flex" style={{marginRight:'72%'}}>
            <label for="grade" className="col-sm-2 col-form-label">Grade</label>
            <select class="form-select"  onChange={(e) => setsearch(e.target.value)} placeholder="Search by Grade" aria-label="Search">
            <option value="">All Grades</option>
            <option value="10">Grade 10</option>
            <option value="11">Grade 11</option>
            <option value="12">grade 12</option>
            <option value="13">Grade 13</option>
            </select>
            </form>


            </div>
            <br></br>
           
            
    
            <div>
            
            <table class="table table-borderless">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Time</th>
                        <th scope="col">Garde</th>
                        <th scope="col">Date</th>
                        <th scope="col">Class</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                {classes.filter((classes) => {
                    return search.toString().toLowerCase() === '' ? classes: classes.grade.toString().toLowerCase().includes(search);
                    
                }).map((classes, index) => {
                    return(
                    <tr key={classes._id}>
                        <th scoop="row">{index+1}</th>
                        <td><div class="shadow p-3 mb-5 bg-danger body rounded border border-3 border border-dark text-white">{classes.time}</div></td> 
                        <td><div class="shadow p-3 mb-5 bg-danger body rounded border border-3 border border-dark text-white">{classes.grade}</div></td>
                        <td><div class="shadow p-3 mb-5 bg-danger body rounded border border-3 border border-dark text-white">{classes.date}</div></td>
                        <td><div class="shadow p-3 mb-5 bg-danger body rounded border border-3 border border-dark text-white">{classes.classname}</div></td>
                        <td>
                        <a className="p-3 mb-5 btn btn-success border border-3 border border-dark"  href={classes.link}>
                                <i className="fas fa-wifi"></i>&nbsp;Live
                            </a>
                        </td>
                        
                      
                    </tr>
                    )
                    
                
                
               
            })}

                </tbody>
            </table>

            </div>

            <br></br>

                

  
            

            
        </div>
      
        
    )

    
    
}
