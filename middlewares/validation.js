"use strict";
const { skip } = require("graphql-resolvers");
const { validationError } = require("../utils/index");
const validateUserInput = (schema) => async (_, args) => {
  const { error } = schema.validate(args, { abortEarly: false });
  if (error) {
    const { details } = error;
    return validationError(details);
  }
  return skip;
};
module.exports = { validateUserInput };
