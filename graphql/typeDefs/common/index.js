"use strict";
const commonTypeDefs = `#graphql

scalar DateTime

type Error{
    errorField:String
    error:String
}
type Meta {
    message : String!
    messageCode : String
    statusCode : Int!
    status : String!
    type: String
    errors: [Error]
    errorType:String
}
`;

module.exports = { commonTypeDefs };
