// const { database, connection } = require("../config/connection");



// if (database === "MySQL") {

//   const { Model, DataTypes } = require('sequelize');
//   class Interest extends Model { }
//   Interest.init(
//     {
//       id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         primaryKey: true,
//         autoIncrement: true,
//       },
//       interest: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       category: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//     },
//     {
//       connection,
//       timestamps: false,
//       freezeTableName: true,
//       underscored: false,
//       modelName: 'interest',
//     }
//   );
//   module.exports = Interest;


// } else if (database === "MongoDB") {


const { Schema, model } = require('mongoose');

const interestSchema = new Schema(
  {
    interest: {
      type: String,
      required: true
    },
    category: {
      type: String,
    },
  }
);

const Interest = model('Interest', interestSchema);
module.exports = Interest;
// }
