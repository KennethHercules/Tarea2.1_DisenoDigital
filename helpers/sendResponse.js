export function sendResponse({ res, message = '', data = null, statusCode = 200, success = true }) {
  return res.status(statusCode).json({
    success,
    message,
    data
  });
}
