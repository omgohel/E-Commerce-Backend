const { httpResponses } = require("./http-responses.js");
const { httpsStatusCodes } = require("./http-status-codes.js");
const { errorTypes } = require("./error-types.js");
const bcrypt = require("bcrypt");

const success = (message, data, statusCode = httpsStatusCodes.SUCCESS) => {
  let result = {};
  result.meta = {
    message: message,
    statusCode: statusCode,
    messageCode: message,
    status: httpResponses.SUCCESS,
  };
  if (data) {
    result.data = data;
  }
  return result;
};

const failure = (
  message,
  statusCode = httpsStatusCodes.ERROR,
  errorType = errorTypes.ERROR,
  errors = []
) => {
  let result = {};
  result.meta = {
    message: message,
    errorType,
    messageCode: message,
    statusCode: statusCode,
    status: httpResponses.ERROR,
    errors,
  };
  return result;
};

const throwException = (error, message) => {
  let errorMeta = {};
  if (typeof error === "object") {
    const {
      message: err_message,
      stack: error_stack,
      req_id,
      resolver_name,
    } = error;
    Object.assign(errorMeta, {
      err_message,
      error_stack,
      req_id,
      resolver_name,
    });
  }
  return failure(message, {}, httpsStatusCodes.BAD_REQUEST, "exception");
};

const validationError = (details) => {
  let errors = [];
  details.map((val) => {
    let existingError = errors.filter((err) => {
      return err.errorField == val.context.key;
    });
    if (existingError.length == 0) {
      errors.push({
        errorField: val.context.key,
        error: i18n.__(val.message),
      });
    }
  });
  return failure(
    httpResponses.SERVER_SIDE_VALIDATION,
    httpsStatusCodes.UNPROCESSABLE_ENTITY,
    errorTypes.VALIDATION,
    errors
  );
};

const generateHash = (str) => bcrypt.hash(str, 10);

module.exports = {
  success,
  failure,
  validationError,
  generateHash,
  throwException,
};
