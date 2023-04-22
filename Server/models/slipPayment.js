const mongoose = require('mongoose');

const slipPaymentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    classId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class"
    },
    slip: {
        type: String,
        required: true
    }
});

const SlipPayment = mongoose.model('SlipPayment', slipPaymentSchema)

module.exports = SlipPayment;