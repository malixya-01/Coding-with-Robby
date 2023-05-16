const Enrollment = require("../models/enrollments");

const addEnrollment = async (req, res) => {
  try {
    //Get the sent in data off request body(retreive data from request)
    const { classId } = req.body;

    //Create a object with it
    const enrollment = await Enrollment.create({
      classId,
      user: "user1",
    });

    //respond with the new enrollment
    res.json({ enrollment });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const fetchStudents = async (req, res) => {
  try {
    //Get id off the url
    const classId = req.params.id;
    //Find the enrollment using that id
    const students = await Enrollment.find({ classId: classId });
    //Respond with the enrollment
    res.json({ students });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const deleteEnrollment = async (req, res) => {
  try {
    //Get  id off the url
    const enrollmentId = req.params.id;

    //Delete the record
    const enrollment = await Enrollment.deleteOne({ _id: enrollmentId });

    //Respond
    res.json({
      success: "Record deleted",
      enrollment,
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

module.exports = {
  addEnrollment,
  fetchStudents,
  deleteEnrollment,
};
