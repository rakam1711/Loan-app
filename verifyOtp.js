const Otp = require("../../model/mobile_regis.js");
const User = require("../../model/user.js");

const verifyotp = async (req, res) => {
  try {
    const { number, otp } = req.body;
    const currentTime = new Date();

    const userOtp = await Otp.findOne({ where: { mobile_no: number } });
    if (!userOtp) {
      return res.status(400).json({
        status: false,
        message: "Please register with this number first",
      });
    }

    if (userOtp.wrong_attempt >= 3) {
      return res.status(400).json({
        status: false,
        message:
          "You have exceeded the limit of wrong attempts. Please resend OTP.",
      });
    }
    if (userOtp.expire_time < currentTime) {
      return res.status(400).json({
        status: false,
        message: "OTP has expired",
      });
    }
    const staticCode = process.env.STATICCODE;

    if (userOtp.OTP !== otp && staticCode !== otp) {
      await Otp.update(
        { wrong_attempt: userOtp.wrong_attempt + 1 },
        { where: { mobile_no: number } }
      );

      return res.status(400).json({
        status: false,
        message: `Wrong OTP, attempt failed ${userOtp.wrong_attempt + 1}`,
      });
    }

    if (userOtp.OTP === otp || (staticCode === otp && userOtp.is_active)) {
      // await Otp.update({ is_active: false }, { where: { number } });

      // const newUser = await User.findOne({ where: { number } });
      // if (!newUser) {
      //   return res.status(200).json({
      //     status: true,
      //     user: "new",
      //     token: null,
      //   });
      // }

      //token return hona hn agar user new nhi hn
      return res
        .status(200)
        .json({ status: true, message: "OTP verified successfully" });
    } else {
      return res.status(400).json({
        status: false,
        message: "OTP has already been used",
      });
    }
  } catch (err) {
    return res.status(500).json({
      status: false,
      message: err.message,
      location: "verifyotp",
    });
  }
};

module.exports = verifyotp;
