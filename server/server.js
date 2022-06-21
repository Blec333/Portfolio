const path = require("path");
// const routes = require('./routes');
const express = require("express");
const { authMiddleware } = require("./utils/auth");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schemas");
const { database, connection } = require("./config/connection");
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
const cwd = process.cwd();
// app.use(routes);


if (database === "MySQL ") {

  const session = require("express-session");
  // const routes = require("./controllers");
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


  //ADD APOLLO SERVER------------------------
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
  });
  //----------------------------------------

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

