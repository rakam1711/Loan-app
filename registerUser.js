const User = require("../../model/user.js");

const registerUser = async (req, res, next) => {
  try {
    const mustData = {
      mbl_reg_id:req.body.mbl_reg_id,   
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      dateOfBirth: req.body.dateOfBirth,
      email: req.body.email,
      gender: req.body.gender
    };
    for (let key in mustData) {
      if (mustData[key] == undefined || mustData[key] == "") {
        throw new Error(`Invalid feild ${key}`);
      }
    }
    let user = await User.findOne({ where: { mobile_no } });
    if (!user) {
      await User.create({
        mbl_reg_id: mustData.mbl_reg_id,
        first_name: mustData.firstname,
        middle_name: "",
        last_name: mustData.lastname,
        dob: mustData.dateOfBirth,
        email: mustData.email,
        gender: mustData.gender,
      });
      return res
        .status(201)
        .json({ message: "User created successfully", status: true });
    }
  } catch (err) {
    return res.status(500).json({
      status: false,
      message: err.message,
      location: "registerUser",
    });
  }
};

module.exports = registerUser;
