const { Op } = require("sequelize"); // Import Op from Sequelize
const User = require("../../model/user.js");

const registerUser = async (req, res, next) => {
  try {
    console.log(req.body);
    const mustData = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      gender: req.body.gender,
      email: req.body.email,
      number: req.body.number,
      dateOfBirth: req.body.dateOfBirth,
    };

    for (let key in mustData) {
      if (mustData[key] == undefined || mustData[key] === "") {
        throw new Error(`Invalid field: ${key}`);
      }
    }

    const optionalData = {
      middle_name: req.body.middle_name,
      pincode: req.body.pincode,
      city_id: req.body.city_id,
      employement_type_id: req.body.employement_type_id,
      income_annual: req.body.income_annual,
      inc_rec_id: req.body.inc_rec_id,
      created_by: req.body.created_by,
      updated_by: req.body.updated_by,
    };

    let user = await User.findOne({
      where: {
        [Op.or]: [
          { mobile_no: mustData.number }
          // ,{ panNo: mustData.panNo }
        ],
      },
    });

    if (!user) {
      await User.create({
        first_name: mustData.firstname,
        last_name: mustData.lastname,
        gender: mustData.gender,
        email: mustData.email,
        mobile_no: mustData.number,
        dob: mustData.dateOfBirth,
        ...optionalData,
      });

      return res
        .status(201)
        .json({ message: "User created successfully", status: true });
    } else {
      let errorMessage =
        user.mobile_no === mustData.number
          ? "User with this mobile number already exists"
          : "User with this PAN number already exists";
      return res.status(400).json({ message: errorMessage, status: false });
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
