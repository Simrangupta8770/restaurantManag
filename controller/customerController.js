const Customer = require("../model/customerModel");
const catchAsyncErrors = require("../middleware/catchAsynce");
// Create new Order
exports.newCustomer = catchAsyncErrors(async (req, res, next) => {
  const {
    name,
      order,
      tot,
    createdAt
  } = req.body;
    const exist = await Customer.findOne({createdAt});
    
    if (exist) {
        exist.name = name;
        exist.order = order;
        exist.tot = tot;
        exist.createdAt = createdAt;
        res.status(201).json({
            success: true,
            exist,
        });
        await exist.save();
        return;
    }
  const customer = await Customer.create({
    name,
    order,
    tot,
    createdAt
  });

  res.status(201).json({
    success: true,
    customer,
  });
});

exports.allCustomer = catchAsyncErrors(async (req, res, next) => {
    const customers = await Customer.find();

  res.status(200).json({
    success: true,
    customers,
  });
  });
  