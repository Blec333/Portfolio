const { database, connection } = require("../config/connection");



if (database === "MySQL") {

  const { Model, DataTypes } = require('sequelize');
  class TechnicalSkills extends Model { }
  TechnicalSkills.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      skills: {
        type: DataTypes.ARRAY,
        allowNull: false,
      },
    },
    {
      connection,
      timestamps: false,
      freezeTableName: true,
      underscored: false,
      modelName: 'technicalSkills',
    }
  );
  module.exports = TechnicalSkills;


} else if (database === "MongoDB") {


  const { Schema, model } = require('mongoose');
  const technicalSkillsSchema = new Schema(
    {
      skills: {
        type: Array,
        required: true,
      },
    }
  );

  const TechnicalSkills = model('TechnicalSkills', technicalSkillsSchema);
  module.exports = TechnicalSkills;
}
