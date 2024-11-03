import express from "express";
import { APP_PORT } from "./config";
//import errorHandler from "./middlewares/errorHandler";
import routes from "./routes/index";
const cors = require("cors");
const db = require("./model/index");
// const https = require("https");
// const fs = require("fs");
// const  fileUpload=require('express-fileupload')

const app = express();

db.sequelize.sync();
app.use(express.urlencoded({ extended: true, limit: "100kb" }));
app.use(express.json());
app.use(cors());
// app.use(morgan("dev"));

app.use("/api", routes);
//app.use(errorHandler);
let port = process.env.APP_PORT || 1001;

app.listen(port, () => console.log(`[ ✓ ] Loan No1 Running on port : ${port}`));
