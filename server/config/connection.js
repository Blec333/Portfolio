const database = "MongoDB"// either "MongoDB" or "MySQL"


if (database === "MySQL ") {

  const Sequelize = require("sequelize");
  require("dotenv").config();

  const connection =
    process.env.JAWSDB_URL
      // false
      ? new Sequelize(process.env.JAWSDB_URL)
      : new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
          host: "127.0.0.1",
          dialect: "mysql",
          port: 3306,
        }
      );

} else if (database === "MongoDB") {

  const mongoose = require('mongoose');

  const connection = mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/portfolioDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });

}


module.exports = { database, connection };
