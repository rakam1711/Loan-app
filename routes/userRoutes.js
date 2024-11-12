const userroutes = require("express").Router();

const loginUser = require("../controllers/user/loginUser.js");
const aadharRegister = require("../controllers/user/registerAadhar.js");
const registerPan = require("../controllers/user/registerPan.js");
const registerUser = require("../controllers/user/registerUser.js");
const aadharVerify = require("../controllers/user/verifyAadhar.js");
const verifyOtp = require("../controllers/user/verifyOtp.js");
const verifyPan = require("../controllers/user/verifyPan.js");

userroutes.post("/sendotp", loginUser);
userroutes.post("/verifyotp", verifyOtp);
userroutes.post("/register-user", registerUser);
userroutes.post("/register-pan", registerPan);
userroutes.post("/register-aadhar", aadharRegister);
userroutes.post("/verify-pan", verifyPan);
userroutes.post("/verify-aadhar", aadharVerify);

module.exports = userroutes;
