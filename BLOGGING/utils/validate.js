const validator = require("validator");

function validUser(data) {
  const mandatoryField = [
    "firstName",
    "lastName",
    "password",
    "email",
    "role",
  ];

  const IsAllowed = mandatoryField.every((k) => Object.keys(data).includes(k));
  if (!IsAllowed) throw new Error("Fields Missing");
  if (!validator.isEmail(data.email)) throw new Error("Invalid Email");

  if (!validator.isStrongPassword(data.password))
    throw new Error("Week Password");

  if (
    !(
      data.firstName.length >= 3 &&
      data.firstName.length <= 20 &&
      data.lastName.length >= 3 &&
      data.lastName.length <= 20 &&
      validator.isAlphanumeric(data.firstName) &&
      validator.isAlphanumeric(data.lastName)
    )
  )
    throw new Error("Name should have at least 3 char and atmost 20 char without andy numeric char");

  if (!(data.role == "USER" || data.role == "ADMIN"))
    throw new Error("Role Required");
}

module.exports = validUser;
