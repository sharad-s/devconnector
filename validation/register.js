const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // Convert to empty string if no var is passed in
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  // Name
  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2 and 30 characters.";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required.";
  }

  // Email
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required.";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid.";
  }

  // Password
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required.";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be between 6 and 30 characters.";
  }

  // Password2
  // Password
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm Password field is required.";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};