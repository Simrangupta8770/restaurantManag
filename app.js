const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
// const fileUpload = require("express-fileupload");
const path = require("path");
require("dotenv").config();

// const errorMiddleware = require("./middleware/error");

// Config
// if (process.env.NODE_ENV !== "PRODUCTION") {
//   require("dotenv").config({ path: "backend/config/config.env" });
// }
var cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

// Route Imports
const add = require("./routes/addroute");


app.use("/api/v1", add);

app.use(express.json());

// app.get("*", (req, res) => {
//   res.send("<h1>Welcome to Node Server</h1>");
// });

const __dirname1 = path.resolve();

  app.use(express.static(path.join(__dirname1, "/intern/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1,"intern", "build", "index.html"))
  );

// Middleware for Errors
// app.use(errorMiddleware);

module.exports = app;
