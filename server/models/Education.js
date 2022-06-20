const { Schema, model } = require('mongoose');

const educationSchema = new Schema(
  {
    focus: {
      type: String,
      required: true,
    },
    school: {
      type: String,
      required: true,
    },
    dates: {
      type: String,
    },
    location: {
      type: String,
    },
    program: {
      type: String,
    },
  }
);

const Education = model('Education', educationSchema);

module.exports = Education;
