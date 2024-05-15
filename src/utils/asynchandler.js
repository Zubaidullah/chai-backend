// using try catch block to handle async errors
const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next);
    } catch (error) {
        res.status(500).json({ message: error.message, success: false });
    }
}

// using promise to handle async errors
const asyncHandler1 = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

export default asyncHandler;