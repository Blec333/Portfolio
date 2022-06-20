const { Schema, model } = require('mongoose');

const experienceSchema = new Schema(
  {
    company: {
      type: String,
      required: true,
    },
    title: {
      type: String,
    },
    dateRange: {
      type: String,
    },
    location: {
      type: String,
    },
    description1: {
      type: String,
    },
    description2: {
      type: String,
    },
    description3: {
      type: String,
    },
    description4: {
      type: String,
    },
    description5: {
      type: String,
    },
    description6: {
      type: String,
    },
    description7: {
      type: String,
    },
    description8: {
      type: String,
    },
    description9: {
      type: String,
    },
    description10: {
      type: String,
    },
    description11: {
      type: String,
    },
    description12: {
      type: String,
    },
    description13: {
      type: String,
    },
    description14: {
      type: String,
    },
    description15: {
      type: String,
    },
  }
);

const Experience = model('Experience', experienceSchema);

module.exports = Experience;