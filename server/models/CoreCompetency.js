const { database, connection } = require("../config/connection");



if (database === "MySQL") {

  const { Model, DataTypes } = require('sequelize');
  class CoreCompetency extends Model { }
  CoreCompetency.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      coreCompetency: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      connection,
      timestamps: false,
      freezeTableName: true,
      underscored: false,
      modelName: 'coreCompetency',
    }
  );
  module.exports = CoreCompetency;


} else if (database === "MongoDB") {


  const { Schema, model } = require('mongoose');
  const coreCompetencySchema = new Schema(
    {
      coreCompetency: {
        type: String,
        required: true,
      },
    }
  );

  const CoreCompetency = model('CoreCompetency', coreCompetencySchema);
  module.exports = CoreCompetency;
}
