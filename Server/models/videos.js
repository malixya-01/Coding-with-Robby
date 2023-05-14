const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const videoSchema = new Schema({
  url: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  views: {
    type: Number,
    default: 0,
  },
  grade: {
    type: Number,
    //required:true,
  },
});

const Video = mongoose.model("Video", videoSchema);
module.exports = Video;
