const mongoose = require( 'mongoose');

const Schema = mongoose.Schema;

const adminSchema = new Schema({
    aid:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
});

const admin = mongoose.model("admin", adminSchema);

module.exports = admin;