const joi = require("joi");

const getAllUsersSchema = joi.object({
  first_name: joi.string().allow("", null).optional(),
  last_name: joi.string().allow("", null).optional(),
});

module.exports = { getAllUsersSchema };
