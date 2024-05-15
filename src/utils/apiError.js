// apiError class to handle errors in the application
class apiError extends Error {
  constructor(message = "something went wront", status, stack = "", errors = []) {
    super(message);
    this.status = status;
    this.stack = stack;
    this.message = message;
    this.data = null;
    this.errors = errors;
    this.success = false;

    if(stack) {
        this.stack = stack;
    } else {
        Error.captureStackTrace(this, this.constructor);
    }
  }
}

// chatGPT
/* =======================================code by chatGPT
class ApiError extends Error {
  constructor(message = "something went wrong", status = 500, stack = "", errors = []) {
    super(message);
    this.name = this.constructor.name;
    this.status = status;
    this.stack = stack || (new Error()).stack;
    this.errors = errors;
    this.success = this.status < 400; // Assuming status codes below 400 indicate success
  }
}
*/