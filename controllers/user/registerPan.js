const PanRegister = require("../../model/pan.js");
const { Sequelize } = require("sequelize");

const registerPan = async (req, res, next) => {
  try {
    const mustData = {
      // mbl_reg_id: req.body.mbl_reg_id,
      // user_reg_id: req.body.user_reg_id,
      panNo: req.body.panNo,
      panName: req.body.panName,
      // created_by: req.body.created_by,
    };

    for (let key in mustData) {
      if (mustData[key] === undefined || mustData[key] === "") {
        throw new Error(`Invalid field: ${key}`);
      }
    }

    // Query only by PAN number
    let existingRecord = await PanRegister.findOne({
      where: {
        panNo: mustData.panNo,
      },
    });

    if (!existingRecord) {
      await PanRegister.create({
        // mbl_reg_id: mustData.mbl_reg_id,
        // user_reg_id: mustData.user_reg_id,
        panNo: mustData.panNo,
        panName: mustData.panName,
        // created_by: mustData.created_by,
      });

      return res
        .status(201)
        .json({ message: "PAN registered successfully", status: true });
    } else {
      return res.status(400).json({
        message: "This PAN number is already registered",
        status: false,
      });
    }
  } catch (err) {
    if (err.name === "SequelizeValidationError") {
      console.error("Validation Error Details:", err.errors);
    } else {
      console.error("Error:", err);
    }
    return res.status(500).json({
      status: false,
      message: err.message,
      location: "registerPan",
    });
  }
};

module.exports = registerPan;
