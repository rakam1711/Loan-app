const getOTP = require("../../middlewares/OTP/otp.js");
const OTP = require("../../middlewares/OTP/sendOtp.js");
const OTPMODEL = require("../../model/mobile_regis.js");

const loginUser = async (req, res) => {
  try {
    const { number } = req.body;

    const otp = await getOTP();

    const expire_time = new Date(Date.now() + 60000 * 10);

    let user = await OTPMODEL.findOne({ where: { mobile_no: number } });
    if (!user) {
      user = await OTPMODEL.create({
        mobile_no: number,
        otp: otp,
        expire_time: expire_time,
        wrong_attempt: 0,
      });
    } else {
      await user.update({
        otp: otp,
        expire_time: expire_time,
        wrong_attempt: 0,
      });
    }

    await OTP.sendOTP(number, otp);

    return res.status(200).json({
      status: true,
      message: "OTP sent successfully",
    });
  } catch (err) {
    console.error("Error in loginUser:", err);
    if (err.name === "SequelizeUniqueConstraintError") {
      return res.status(400).json({
        status: false,
        message: "This number is already registered.",
      });
    }
    return res.status(500).json({
      status: false,
      message: "An error occurred while processing your request.",
      error: err.message,
      location: "loginUser",
    });
  }
};
module.exports = loginUser;
