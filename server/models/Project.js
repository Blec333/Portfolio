const { Schema, model } = require('mongoose');

const projectSchema = new Schema(
  {
    projectName: {
      type: String,
      required: true,
    },
    category: {
      type: String,
    },
    type: {
      type: String,
    },
    industry: {
      type: String,
    },
    scale: {
      type: String,
    },
    oversight: {
      type: String,
    },
    client: {
      type: String,
    },
  }
);

const Project = model('Project', projectSchema);

module.exports = Project;
