const Note = require('../models/note');

const createNote = async (req, res) => {
    try {
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
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
};

const fetchNotes = async (req, res) => {
    try {
        //Find the notes
        const notes = await Note.find({ user: req.user._id })
        //Respond with them
        res.json({ notes });
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
};

const fetchNote = async (req, res) => {
    try {
        //Get id off the url
        const noteId = req.params.id;
        //Find the note using that id
        const note = await Note.findOne({ _id: noteId, user: req.user._id })
        //Respond with the note
        res.json({ note });
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
};

const updateNote = async (req, res) => {
    try {
        //Get the id off the url
        const noteId = req.params.id;

        //Get the data off the request body
        const { title, body } = req.body;

        //Find and update the record
        await Note.findOneAndUpdate({ _id: noteId, user: req.user._id }, {
            title,
            body
        });

        //Find updated note
        const note = await Note.findById(noteId);

        //Respond with it
        res.json({ note });
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
};

const deleteNote = async (req, res) => {
    try {
        //Get  id off the url
        const noteId = req.params.id;

        //Delete the record
        const note = await Note.deleteOne({ _id: noteId, user: req.user._id });

        //Respond
        res.json({
            success: "Record deleted",
            note
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
};

module.exports = {
    createNote,
    fetchNotes,
    fetchNote,
    updateNote,
    deleteNote,
};
