const mongoose = require("mongoose");

const slipPaymentSchema = new mongoose.Schema({
  user: String,
  classId: String,
  mobile: String,
  slip: {
    type: String,
    required: true,
  },
  valid: Boolean,
});

const SlipPayment = mongoose.model("SlipPayment", slipPaymentSchema);

module.exports = SlipPayment;
