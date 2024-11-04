const fetch = require("node-fetch");

module.exports = {
  async sendOTP(number, otp) {
    console.log("Sending OTP to:", number, "OTP:", otp);

    const options = {
      method: "POST",
      headers: {
        authkey: "372078AVkzLEKti61I61e7c540F1",
        // authkey: "372078AVkzLEKti61I61e7c540P1", right authkey
        "Content-Type": "application/json",
        Cookie: "PHPSESSID=p6sigj223tdkhtfnq7l41tplh3",
      },
      body: JSON.stringify({
        flow_id: "61e80b152189eb79e85bb0f2",
        sender: "BGGIES",
        mobiles: "91" + number,
        var: otp,
      }),
    };

    try {
      const response = await fetch(
        "https://api.msg91.com/api/v5/flow/",
        options
      );
      const data = await response.json();
      console.log("OTP sent successfully:", data);
      return data;
    } catch (error) {
      console.error("Error in sendOTP:", error.message);
      throw error;
    }
  },
};
