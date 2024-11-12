const AadharRegister = require("../../model/aadhar.js");

const aadharVerify = async (req, res, next) => {
  try {
    const { aaddharNo } = req.query;

    if (!aaddharNo || aaddharNo.trim() === "") {
      return res.status(400).json({
        status: false,
        message: "Aadhar number is required for search",
      });
    }

    const aadharRecord = await AadharRegister.findOne({
      where: { aaddharNo: aaddharNo.trim() },
    });

    if (aadharRecord) {
      return res.status(200).json({
        status: true,
        message: "Aadhar Verified Successfully",
        data: aadharRecord,
      });
    } else {
      return res.status(404).json({
        status: false,
        message: "No record found with the provided Aadhar number",
      });
    }
  } catch (err) {
    return res.status(500).json({
      status: false,
      message: err.message,
      location: "verifyAadhar",
    });
  }
};

module.exports = aadharVerify;
