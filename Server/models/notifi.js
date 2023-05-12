const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const noticeSchema = new Schema({

    name : {
        type : String,
        required: true
    },
    date : {
        type : String,
        required: true
    },
    discription : {
        type : String,
        required: true
    }

})

const Notice = mongoose.model('Notice',noticeSchema);
module.exports = Notice;