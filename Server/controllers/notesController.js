const Note = require('../models/note');

const createNote = async (req, res) => {
    //Get the sent in data off request body(retreive data from request)
    const { title, body } = req.body;
    
    //Create a note with it
    const note = await Note.create({
        title,
        body,
        user: req.user._id
    });
    //respond with the new note
    res.json({ note });

};

const fetchNotes = async (req, res) => {
    //Find the notes
    const notes = await Note.find({ user: req.user._id })
    //Respond with them
    res.json( { notes });
};

const fetchNote = async (req, res) => {
    //Get id off the url
    const noteId = req.params.id;
    //Find the note using that id
    const note = await Note.findOne({ _id: noteId, user: req.user._id })
    //Respond with the note
    res.json({ note });
};

const updateNote = async (req,res) => {
    //Get the id off the url
    const noteId = req.params.id;

    //Get the data off the request body
    const { title , body } = req.body;

    //Find and update the record
    await Note.findOneAndUpdate({ _id: noteId, user: req.user._id}, {
        title,
        body
    });

    //Find updated note
    const note = await Note.findById(noteId);
    
    //Respond with it
    res.json({ note });
};

const deleteNote = async (req, res) => {
    //Get  id off the url
    const noteId = req.params.id;

    //Delete the record
    const note = await Note.deleteOne({ _id: noteId, user: req.user._id });

    //Respond
    res.json({
        success: "Record deleted",
        note
    });
};

module.exports = {
    createNote,
    fetchNotes,
    fetchNote,
    updateNote,
    deleteNote,
};
