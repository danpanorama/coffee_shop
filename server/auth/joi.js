const joi = require("joi");

const createuser = joi.object({
  name: joi.string().required().messages({
    "string.required": `"name"`,
  }),
  email: joi.string().required().messages({
    "string.email": "it is not a valid email",
   
  }),
  lastname: joi.string().required().messages({
    "string.required": `"you must have a last name'`,
  }),
  password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{8,30}$"))
      .required()
      .messages({
        "string.pattern.base": "password must be min 8 max 30  and no simbuls",
      }),
      passwordreapet:joi.string().pattern(new RegExp("^[a-zA-Z0-9]{8,30}$"))
      .required()
      .messages({
        "string.pattern.base": "password must be min 8 max 30  and no simbuls",
      }),
      phon:joi.number().required().messages({
        "number.required": `"phon must be a number'`,
      }),
  idcard: joi.number().required().messages({
    "number.required": `"id must be a number'`,
  })
});

const createUserSchema = (data) => {
  return createuser.validateAsync(data, { abortEarly: false });
};

module.exports.createUserSchema = createUserSchema;
