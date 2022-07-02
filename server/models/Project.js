const { database, connection } = require("../config/connection");



if (database === "MySQL") {

  const { Model, DataTypes } = require('sequelize');
  class Project extends Model { }
  Project.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      projectName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      industry: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      scale: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      oversight: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      client: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      connection,
      timestamps: false,
      freezeTableName: true,
      underscored: false,
      modelName: 'project',
    }
  );
  module.exports = Project;


} else if (database === "MongoDB") {


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
}