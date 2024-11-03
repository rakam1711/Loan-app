 const { Sequelize } = require("sequelize");
 const { sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Signup = sequelize.define("tbluser", {
        userid: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        
        firstname: {
            type: Sequelize.STRING(50)
        },
        
        lastname: {
            type: Sequelize.STRING(50)
        },
        gender: {
            type: Sequelize.STRING(15)
        },
        email: {
            type: Sequelize.STRING(100)
        },
        OTP: {
            type: Sequelize.INTEGER
        },
        OTPStatus: {
            type: Sequelize.STRING(20)
        },

        OTPExpiration: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
            get:(OTPExpiration)=>OTPExpiration.getTime(),
            set:(OTPExpiration)=> new Date()
        },
        status: {
            type: Sequelize.BOOLEAN
        }
    }
    // ,{
    //     timestamps:false
    // }
    );
    return Signup;
}


