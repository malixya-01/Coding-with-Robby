const Class = require('../models/class');

const createClass = async (req, res) => {
    try {
        //Get the sent in data off request body(retreive data from request)
        const { title } = req.body;

        //Create a note with it
        const theClass = await Class.create({
            title
        });
        //respond with the new note
        res.json({ theClass });
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }


};



module.exports = createClass