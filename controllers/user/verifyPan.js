const PanRegister = require("../../model/pan.js");

const verifyPan = async (req, res, next) => {
  try {
    const { panNo } = req.body;

    if (!panNo || panNo.trim() === "") {
      return res.status(400).json({
        status: false,
        message: "PAN number is required for search",
      });
    }

    const panRecord = await PanRegister.findOne({
      where: { panNo: panNo.trim() },
    });

    if (panRecord) {
      return res.status(200).json({
        status: true,
        message: "PAN verified successfully",
        data: panRecord,
      });
    } else {
      return res.status(404).json({
        status: false,
        message: "No record found with the provided PAN number",
      });
    }
  } catch (err) {
    return res.status(500).json({
      status: false,
      message: err.message,
      location: "verifyPan",
    });
  }
};

module.exports = verifyPan;
