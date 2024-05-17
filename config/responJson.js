const successResponse = (res, message, data = null) => {
  return res.status(200).json({ success: true, message, data });
};

const errorResponse = (res, message, statusCode = 500) => {
  return res.status(statusCode).json({ success: false, message });
};

const validationErrorResponse = (res, message, errors) => {
  return res.status(400).json({ success: false, message: 'Validation errors', errors });
};

const notFoundResponse = (res, message = 'Not found') => {
  return res.status(404).json({ success: false, message });
};

const internalErrorResponse = (res, message = 'Internal server error') => {
  return res.status(500).json({ success: false, message });
};

module.exports = {
  successResponse,
  errorResponse,
  validationErrorResponse,
  notFoundResponse,
  internalErrorResponse
};
