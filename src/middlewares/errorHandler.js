const errorHandler = (err, _req, res, _next) => {
  const { statusCode, message } = err;
  console.error(message);
  return res.status(statusCode || 500).json({ message });
};

module.exports = errorHandler;
