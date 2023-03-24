const joi = require("joi");

const productSchema = joi.object({
  name: joi.string().required(),
  quantity: joi.number().integer().positive().required(),
  price: joi.number().positive().required(),
  image: joi.string().required(),
});

const productValidator = (req, res, next) => {
  const { error } = productSchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    next(error);
  }
  next();
};

module.exports = { productValidator };
