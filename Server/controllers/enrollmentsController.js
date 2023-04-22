const Enrollment = require('../models/enrollments')

const addEnrollment = async (req, res) => {
    try {
        //Get the sent in data off request body(retreive data from request)
        const { classId } = req.body;

        //Create a object with it
        const enrollment = await Enrollment.create({
            classId,
            user: req.user._id
        });

        //respond with the new enrollment
        res.json({ enrollment });

    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
};

module.exports = {
    addEnrollment
};