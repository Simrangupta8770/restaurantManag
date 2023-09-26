const catchAsyncErrors = require("./catchAsynce");


exports.isValid = catchAsyncErrors(async (req, res, next) => {
    next();
});