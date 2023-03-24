const joi = require("joi");

const loginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});

const loginValidator = (req, res, next) => {
  const { error } = loginSchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    next(error);
  }
  next();
};

module.exports = {
  loginValidator,
};
