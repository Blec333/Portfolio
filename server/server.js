

  const { writeFileSync } = require("fs");
const { database } = require("./config/connection");

if (database === "MySQL ") {
  const session = require("express-session");
  const path = require("path");
  const { connection } = require("./config/connection");
  // const routes = require("./controllers");
  // const routes = require('./routes');
  const express = require("express");
  const PORT = process.env.PORT || 3001;
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
  // app.use(routes);
  const SequelizeStore = require("connect-session-sequelize")(session.Store);
  const sess = {
    secret: "SuperDuper Secreter Secret Secret",
    cookie: { maxAge: 1000000 },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: connection,
    }),
  };
  app.use(session(sess));

  connection.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
  });


} else if (database === "MongoDB") {


  const express = require("express");
  const { ApolloServer } = require("apollo-server-express");
  const path = require("path");
  const { authMiddleware } = require("./utils/auth");
  const { typeDefs, resolvers } = require("./schemas");
  const { connection } = require("./config/connection");
  // const routes = require('./routes');
  const PORT = process.env.PORT || 3001;
  const app = express();
  //ADD APOLLO SERVER------------------------
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
  });
  //----------------------------------------


  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use('/img', express.static(path.join(__dirname, '../client/img')));

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }
  app.get("/", (req, res) => {
    // const count = readFileSync('./utils/count.txt', 'utf-8');
    // const newCount = parseInt(count) + 1
    // writeFileSync('./utils/count.txt', newCount)
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

  // app.use(routes);

  const cwd = process.cwd();
  const activity = cwd.includes("01-Activities")
    ? cwd.split("/01-Activities/")[1]
    : cwd;


  const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({ app });

    connection.once("open", () => {
      app.listen(PORT, () => {
        console.log(`🌍 API server for ${activity} running on port ${PORT}!`);
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
      });
    });
  };

  startApolloServer(typeDefs, resolvers);
}

