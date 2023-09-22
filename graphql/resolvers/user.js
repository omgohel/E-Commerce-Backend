const { getAllUsers } = require("../../services/user");
// const { getAllUsersSchema } = require("../../validations/admin/user");
// const { combineResolvers } = require("graphql-resolvers");
// const { validateUserInput } = require("../../middlewares/validation.js");
// const { isAuthenticated } = require("../../middlewares/jwt-verification.js");

const userResolvers = {
  Query: {
    getAllUsers: getAllUsers,
  },
};

module.exports = { userResolvers };
