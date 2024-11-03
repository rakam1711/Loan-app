//const db = require("../../model");
const otpGenerator = require("otp-generator");

//const Signup = db.signups;
//const Op = db.Sequelize.Op;

exports.Login = async (req, res) => {
  let otpIs = otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    specialChars: false,
    lowerCaseAlphabets: false,
  });
  return res.json({
    result: `Your OTP is ${otpIs}`,
  });
  
};

exports.Signup = async (req, res) => {
  
};
