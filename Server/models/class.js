const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    title: String,
  });

  const Class = mongoose.model('Class', classSchema);

  module.exports = Class;