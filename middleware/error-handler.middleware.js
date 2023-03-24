const errorHandlerMiddleware = (err, req, res, next) => {
  let formattedError = {};
  if (err.isJoi) {
    for (const validationErr of err.details) {
      formattedError[validationErr.context.label] = validationErr.message;
    }
  } else {
    formattedError = {
      message: err.message || "something went wrong",
    };
  }
  res.status(400).json(formattedError);
};

module.exports = {
  errorHandlerMiddleware,
};
