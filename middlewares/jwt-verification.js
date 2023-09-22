const { skip } = require("graphql-resolvers");
const jwt = require("jsonwebtoken");
const { failure, httpsStatusCodes, httpResponses } = require("../utils");
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const isAuthenticated = async (__root, input, { token }) => {
  try {
    if (!token) {
      return failure(
        "TOKEN_MISSING",
        httpsStatusCodes.UNAUTHORIZED,
        httpResponses.UNAUTHORIZED
      );
    }
    const jwtToken = token.split(" ")[1];
    const decodedToken = jwt.verify(jwtToken, JWT_SECRET_KEY);
    if (!decodedToken) {
      return failure(
        "NOT_AUTHORISED",
        httpsStatusCodes.UNAUTHORIZED,
        httpResponses.UNAUTHORIZED
      );
    }
    return skip;
  } catch (err) {
    return failure(
      "INVALID_TOLEN",
      httpsStatusCodes.UNAUTHORIZED,
      httpResponses.UNAUTHORIZED
    );
  }
};
module.exports = { isAuthenticated };
