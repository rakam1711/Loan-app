const getOTP = require("../../../Middleware/OTP/otp.js");
const OTP = require("../../../Middleware/OTP/sendOTP.js");
const Signup = require("../model/signupModel.js"); 

const loginUser = async (req, res) => {
  try {
    const { countryCode, number } = req.body;

    const otp = await getOTP();
    const expire_time = new Date(Date.now() + 60000 * 10); 

    let user = await Signup.findOne({ where: { number } });

    if (!user) {
      user = await Signup.create({
        number,
        OTP: otp,
        OTPExpiration: expire_time,
        status: true,
        wrong_attempt: 0,
      });
    } else {
      await user.update({
        OTP: otp,
        OTPExpiration: expire_time,
        wrong_attempt: 0,
        status: true,
      });
    }

    await OTP.sendOTP(number, otp);

    return res.status(200).json({
      status: true,
      message: "OTP sent successfully",
    });
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({
        status: false,
        message: 'This number is already registered.',
      });
    }
    return res.status(500).json({
      status: false,
      message: 'An error occurred while processing your request.',
      error: err.message,
    });
  }
};

module.exports = loginUser;
