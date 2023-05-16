const mongoose = require('mongoose');

const slipPaymentSchema = new mongoose.Schema({
    user: String,
    classId: String,
    slip: {
        type: String,
        required: true
    }
});

const SlipPayment = mongoose.model('SlipPayment', slipPaymentSchema)

module.exports = SlipPayment;