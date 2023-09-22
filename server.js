const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { sequelize } = require("./models");
// const typeDefs = require("./graphql/schema");
// const resolvers = require("./graphql/resolvers");
const {typeDefs} = require("./graphql/typeDefs/index")
const {resolvers} = require("./graphql/resolvers/index")

const app = express();
const PORT = process.env.PORT || 3000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Start the Apollo Server and apply middleware
async function startServer() {
  await server.start();

  server.applyMiddleware({ app });

  app.listen(PORT, async () => {
    console.log(`Server started on http://localhost:${PORT}/graphql`);
    await sequelize.sync(); // Sync the Sequelize models with the database
  });
}

startServer().catch((error) => {
  console.error("Error starting server:", error);
});
