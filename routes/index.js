const userRoute = require("./userRoutes.js");

const appRoutes = (app) => {
  app.use("/ping", (req, res) => {
    res.send("ping successfully");
  });
  app.use("/user", userRoute);
};

module.exports = appRoutes;
