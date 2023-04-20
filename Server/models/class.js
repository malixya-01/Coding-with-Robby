const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    title: String,
    slipPayments: [{type : mongoose.Schema.Types.ObjectId, ref: "SlipPayment"}]
  });

  const Class = mongoose.model('Class', classSchema);

  module.exports = Class;