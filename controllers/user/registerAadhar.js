const AadharRegister = require("../../model/aadhar.js");

const aadharRegister = async (req, res, next) => {
  try {
    const mustData = {
      mbl_reg_id: req.body.mbl_reg_id,
      user_reg_id: req.body.user_reg_id,
      aaddharNo: req.body.aaddharNo,
      aaddharName: req.body.aaddharName,
      created_by: req.body.created_by,
    };

    for (let key in mustData) {
      if (mustData[key] === undefined || mustData[key] === "") {
        throw new Error(`Invalid field: ${key}`);
      }
    }

    let existingRecord = await AadharRegister.findOne({
      where: {
        [Sequelize.Op.or]: [
          { aaddharNo: mustData.aaddharNo },
          { aaddharName: mustData.aaddharName },
        ],
      },
    });

    if (!existingRecord) {
      await AadharRegister.create({
        mbl_reg_id: mustData.mbl_reg_id,
        user_reg_id: mustData.user_reg_id,
        aaddharNo: mustData.aaddharNo,
        aaddharName: mustData.aaddharName,
        created_by: mustData.created_by,
        aaddhar_varified:
          req.body.aaddhar_varified !== undefined
            ? req.body.aaddhar_varified
            : true,
        status: req.body.status !== undefined ? req.body.status : true,
        is_active: req.body.is_active !== undefined ? req.body.is_active : true,
      });

      return res
        .status(201)
        .json({ message: "Aadhar  registered successfully", status: true });
    } else {
      let errorMessage =
        existingRecord.aaddharNo === mustData.aaddharNo
          ? "This Aadhar number is already registered"
          : "This Aadhar name is already registered";
      return res.status(400).json({ message: errorMessage, status: false });
    }
  } catch (err) {
    return res.status(500).json({
      status: false,
      message: err.message,
      location: "aadharRegister",
    });
  }
};

module.exports = aadharRegister;
