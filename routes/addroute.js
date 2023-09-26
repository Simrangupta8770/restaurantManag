const express = require("express");
const {
    newCustomer,
    allCustomer
} = require("../controller/customerController");
const { isValid } = require("../middleware/m");
const router = express.Router();


router.route("/add").post(isValid,newCustomer);

router.route("/").get(isValid,allCustomer);

// router.route("/del").get(isAuthenticatedUser, myOrders);

module.exports = router;