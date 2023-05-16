const mongoose = require("mongoose");

const enrollmentSchema = new mongoose.Schema({
  user: String,
  classId: String,
});

const enrollment = mongoose.model("Enrollment", enrollmentSchema);

module.exports = enrollment;
