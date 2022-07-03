const { database, connection } = require("../config/connection");



if (database === "MySQL") {

  const { Model, DataTypes } = require('sequelize');
  class TechnicalSkill extends Model { }
  TechnicalSkill.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      skill: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      connection,
      timestamps: false,
      freezeTableName: true,
      underscored: false,
      modelName: 'technicalSkill',
    }
  );
  module.exports = TechnicalSkill;


} else if (database === "MongoDB") {


  const { Schema, model } = require('mongoose');
  const technicalSkillSchema = new Schema(
    {
      skill: {
        type: String,
        required: true,
      },
    }
  );

  const TechnicalSkill = model('TechnicalSkill', technicalSkillSchema);
  module.exports = TechnicalSkill;
}
