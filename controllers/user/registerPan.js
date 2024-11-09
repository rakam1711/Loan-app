const PanRegister = require("../../model/pan.js");

const registerPan = async (req, res, next) => {
  try {
    const mustData = {
      mbl_reg_id: req.body.mbl_reg_id,
      user_reg_id: req.body.user_reg_id,
      panNo: req.body.panNo,
      panName: req.body.panName,
      created_by: req.body.created_by,
    };

    for (let key in mustData) {
      if (mustData[key] === undefined || mustData[key] === "") {
        throw new Error(`Invalid field: ${key}`);
      }
    }

    let existingRecord = await PanRegister.findOne({
      where: {
        [Sequelize.Op.or]: [
          { panNo: mustData.panNo },
          { panName: mustData.panName },
        ],
      },
    });

    if (!existingRecord) {
      await PanRegister.create({
        mbl_reg_id: mustData.mbl_reg_id,
        user_reg_id: mustData.user_reg_id,
        panNo: mustData.panNo,
        panName: mustData.panName,
        created_by: mustData.created_by,
        pan_varified:
          req.body.pan_varified !== undefined ? req.body.pan_varified : true,
        status: req.body.status !== undefined ? req.body.status : true,
        is_active: req.body.is_active !== undefined ? req.body.is_active : true,
      });

      return res
        .status(201)
        .json({ message: "PAN registered successfully", status: true });
    } else {
      let errorMessage =
        existingRecord.panNo === mustData.panNo
          ? "This PAN number is already registered"
          : "This PAN name is already registered";
      return res.status(400).json({ message: errorMessage, status: false });
    }
  } catch (err) {
    return res.status(500).json({
      status: false,
      message: err.message,
      location: "registerPan",
    });
  }
};

module.exports = registerPan;
