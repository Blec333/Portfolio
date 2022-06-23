// const { database, connection } = require("../config/connection");



// if (database === "MySQL") {

//   const { Model, DataTypes } = require('sequelize');
//   class Experience extends Model { }
//   Experience.init(
//     {
//       id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         primaryKey: true,
//         autoIncrement: true,
//       },
//       company: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       title: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//       dateRange: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//       location: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//       description1: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//       description2: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//       description3: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//       description4: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//       description5: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//       description6: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//       description7: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//       description8: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//       description9: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//       description10: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//       description11: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//       description12: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//       description13: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//       description14: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//       description15: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//     },
//     {
//       connection,
//       timestamps: false,
//       freezeTableName: true,
//       underscored: false,
//       modelName: 'experience',
//     }
//   );
//   module.exports = Experience;


// } else if (database === "MongoDB") {


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
// }
