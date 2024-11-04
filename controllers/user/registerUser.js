const User = require("../../model/user.js");

const registerUser = async (req, res, next) => {
  try {
    const mustData = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      gender: req.body.gender,
      email: req.body.email,
      mobile_no: req.body.mobile_no,
      panNo: req.body.panNo,
      dateOfBirth: req.body.dateOfBirth,
    };
    for (let key in mustData) {
      if (mustData[key] == undefined || mustData[key] == "") {
        throw new Error(`Invalid feild ${key}`);
      }
    }
    let user = await User.findOne({ where: { mobile_no: number } });
    if (!user) {
      await User.create({
        firstname: mustData.fullName,
        lastname: mustData.number,
        gender: mustData.email,
        email: mustData.gender,
        mobile_no: mustData.mobile_no,
        panNo: mustData.panNo,
        dateOfBirth: mustData.dateOfBirth,
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
