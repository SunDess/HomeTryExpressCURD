const joi = require("joi");

const userSchema = joi.object({
  name: joi.string().required(),
  lastName: joi.string().required(),
  age: joi.number().integer().positive().required(),
  phone: joi.number().integer().positive().required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
});

const userValidator = (req, res, next) => {
  const { error } = userSchema.validate(req.body, {
    abortEarly: false,
  });

  if (error) {
    next(error);
  }
  next();
};

module.exports = { userValidator };
