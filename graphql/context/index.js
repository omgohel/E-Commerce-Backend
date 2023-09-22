const i18n = require("i18n");
const { randomUUID } = require("crypto");

const context = async ({ req }) => {
  const reqId = randomUUID();
  let userLocale = "default"; // Set a default locale if needed

  // Check if i18n is properly configured and has a way to access the user's locale
  if (i18n.getLocale) {
    userLocale = i18n.getLocale(req);
  }

  const __t = req.__;
  let token = req?.headers?.authorization || "";

  return { reqId, __t, token, userLocale };
};

module.exports = context;
