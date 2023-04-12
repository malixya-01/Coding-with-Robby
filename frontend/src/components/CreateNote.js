import { useState, useEffect } from "react";
import axios from 'axios';


export default function CreateNote(){
    
    const [createForm, setCreateForm] = useState({
        title:"",
        body:"",
    });

    const updateCreateFormField = (e) =>{
        //retrieve values from the form input field
        const { name, value }  = e.target;
    
        //updating the state
        setCreateForm( { 
          ...createForm,
          [name]: value,
        });  
    };


      const createNote = async (e) => {
        e.preventDefault();
        
        //Create the note
        const res = await axios.post("http://localhost:3000/notes", createForm);
    
        /*//Update notes state
        setNotes([...notes, res.data.note]);
        */

        //Clear createForm state
        setCreateForm({ title: "", body: "" })
    
      };


    
    
    
    
    return(
        <div>       
            <div className="container">
              <h2>Create Note</h2>
              <form onSubmit={createNote}>
                  
                  Enter title :
                  <br></br>
                  <input
                  name="title"
                  value={createForm.title} 
                  onChange={updateCreateFormField}
                  />
                  <br></br>
                  <br></br>
                  
                  Enter body :
                  <br></br>
                  <textarea
                  name="body"
                  value={createForm.body} 
                  onChange={updateCreateFormField} 
                  />

                  <br></br>
                  <br></br>
                            
                  <button type="sumbit" className="btn btn-primary">Create note</button>

              </form> 
            </div>  
        </div>
    );
}