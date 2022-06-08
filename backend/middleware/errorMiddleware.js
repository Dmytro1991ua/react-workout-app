const customExpressErrorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);

  res.json({ message: err.message, stack: process.env.REACT_APP_NODE_ENV === "production" ? null : err.stack });
};

module.exports = {
  customExpressErrorHandler,
};
