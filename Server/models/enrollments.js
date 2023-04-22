const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    classId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class"
    }
});

const enrollment = mongoose.model('Enrollment', enrollmentSchema)

module.exports = enrollment;