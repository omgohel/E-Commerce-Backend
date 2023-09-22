const { User } = require("../models/index");
const { httpsStatusCodes, httpResponses } = require("../utils");
const { success, failure } = require("../utils/helper.js");

exports.getAllUsers = async () => {
  try {
    const users = await User.findAll();
    if (users.length == 0) {
      return failure("USER_NOT_FOUND_ON_PAGE", httpsStatusCodes.BAD_REQUEST);
    }
    const userCount = await User.count();
    const data = {
      userData: users,
      count: userCount,
    };
    return success("USERS_LIST_HAS_BEEN_FETCHED", data);
  } catch (error) {
    return failure(
      "SOMETHING_WENT_WRONG_WHILE_FETCHING_USERS",
      httpsStatusCodes.INTERNAL_SERVER_ERROR,
      httpResponses.INTERNAL_SERVER_ERROR
    );
  }
};
exports.createUser = async (__root, input) => {
  try {
    const user = await User.findOne({ where: { email: input.email } });
    if (user) {
      return failure(
        "USER_ALREADY_EXIST",
        httpsStatusCodes.NOT_FOUND,
        httpResponses.NOT_FOUND
      );
    }
    const response = await User.create(input);
    return success(
      "USERS_SUCCESSFULLY_CREATED",
      response,
      httpsStatusCodes.SUCCESS
    );
  } catch (err) {
    return failure(
      "SOME_ERR_OCCUR_WHILE_CREATING_USERS",
      httpsStatusCodes.INTERNAL_SERVER_ERROR,
      httpResponses.INTERNAL_SERVER_ERROR,
      err
    );
  }
};
