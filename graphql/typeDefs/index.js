const { userTypeDefs } = require("./user");
const { commonTypeDefs } = require("./common/index");


const rootType = `
    type Query {
        root: String
    }
    type Mutation {
        root: String
    }
`;

const typeDefs = [rootType, userTypeDefs, commonTypeDefs];

module.exports = { typeDefs };
