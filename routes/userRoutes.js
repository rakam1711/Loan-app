const userroutes = require("express").Router();

const loginUser = require("../controllers/user/loginUser.js");
const registerUser = require("../controllers/user/registerUser.js");
const verifyOtp = require("../controllers/user/verifyOtp.js");

userroutes.post("/sendotp", loginUser);
userroutes.post("/verifyotp", verifyOtp);
userroutes.post("/register-user", registerUser);

module.exports = userroutes;
