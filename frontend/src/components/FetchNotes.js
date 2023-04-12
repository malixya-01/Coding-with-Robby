import { useState, useEffect } from "react";
import axios from 'axios';

export default function FetchNotes(){
    
    //State
    const [notes, setNotes] = useState(null);

    //Use effect
    useEffect(() => {
        fetchNotes();
    }, []);
    
    const fetchNotes = async () => {
        //Fetch the notes
        const res = await axios.get("http://localhost:3000/notes");
        //Set to state
        setNotes(res.data.notes);
    };

    const deleteNote = async (_id) => {

        //Delete the note
        await axios.delete(`http://localhost:3000/notes/${_id}`);
        //Update state
          //get notes from state except the deleted one 
          const newNotes = [...notes].filter( (note) => {
            return note.id !== _id;
          });
          
          //updating the state
          //setNotes(newNotes);
          //getting notes
          fetchNotes();
      };


    return(
        <div className="container-md">
            <h2>Notes:</h2>
            {notes &&
            notes.map((note) => {
                return (
                <div key= {note._id}>
                    <h6>{note.title}</h6>
                    

                    <button type="button" class="btn btn-danger" onClick={ () => deleteNote(note._id) }>
                        Delete note
                    </button>


                    &nbsp;&nbsp;&nbsp;
                    <a href={`/update/${note._id}`}>
                        <button type="button" class="btn btn-warning">
                            Update Note
                        </button>
                    </a>
                </div>
                );
            })}
      </div>
    );



};