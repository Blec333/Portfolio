const { database, connection } = require("../config/connection");



if (database === "MySQL") {

  const { Model, DataTypes } = require('sequelize');
  class Education extends Model { }
  Education.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      focus: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      school: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      dates: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      program: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      connection,
      timestamps: false,
      freezeTableName: true,
      underscored: false,
      modelName: 'education',
    }
  );
  module.exports = Education;


} else if (database === "MongoDB") {


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
}
