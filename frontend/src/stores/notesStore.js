import create from "zustand";
import axios from "axios";

const notesStore = create((set) => ({
    notes: null,

    fetchNotes: async () => {
        //Fetch the notes
        const res = await axios.get("http://localhost:3000/notes");
        //Set to state
        set({notes: res.data.notes});
       
    },

    updateCreateFormField: () => {
        //retrieve values from the form input field
        const { name, value }  = e.target;

        //updating the state
        setCreateForm( { 
        ...createForm,
        [name]: value,
        });
            
    }
}));

export default notesStore;