import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function UpdateNote(){

    //extracting note id from the url
    const { id } = useParams();
    
    //State
    const [updateForm, setUpdateForm] = useState({
        _id: null,
        title:"",
        body:""
    });

    //Use effect
    useEffect(() => {
        fetchTheNote(id);
    }, []);


    //function to fetch the note using noteId
    const fetchTheNote = async (noteId) => {
        //request
        const res = await axios.get(`http://localhost:3000/notes/${noteId}`);

        //set state
        setUpdateForm({
            title: res.data.note.title,
            body: res.data.note.body,
            _id: res.data.note._id
        });
    }

    //establishing connection between form field values and state
    const handleUpdateFieldChange = (e) => {
    const {value, name} = e.target;

        setUpdateForm({
        ...updateForm,
        [name] : value 
        }); 
    };

    //this is the update function
    const updateNote = async (e) => {
        e.preventDefault();
        
        //extract data off the state to a new object
        const { title, body } = updateForm;

        //Send the update request
        const res = await axios.put(`http://localhost:3000/notes/${updateForm._id}`, {title, body});

        //Clear updateForm state
        setUpdateForm({
            _id: null,
            title: "",
            body: ""
        });
    };

    return(     
        <div>
            <h2>Update note</h2>
            <form>

                Enter title :
                <br></br>
                <input 
                    name="title"
                    value={updateForm.title}
                    onChange={handleUpdateFieldChange}
                />

                <br></br>
                <br></br>
                
                Enter body :
                <br></br>
                <textarea 
                    name="body"
                    value={updateForm.body}
                    onChange={handleUpdateFieldChange}
                />

                <br></br>
                <br></br>

                <button type="submit" className="btn btn-success" onClick={updateNote}>Update Note</button>
            </form>
        </div>
    );
}