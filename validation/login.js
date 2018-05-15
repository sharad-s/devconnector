const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  // Convert to empty string if no var is passed in
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid.";
  }

  // Email
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required.";
  }

  // Password
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required.";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
