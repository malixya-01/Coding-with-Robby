const mongoose =  require('mongoose');

const Schema = mongoose.Schema;

const classSchema = new Schema({

    classname : {
        type : String,
        required: true
    },
    grade : {
        type : String,
        required: true
    },
    date : {
        type : String,
        required: true
    },
    time : {
        type : String,
        required: true
    },
    link : {
        type : String,
        required: true
    }

})

const timetable = mongoose.model('timetable',classSchema);
module.exports = timetable;