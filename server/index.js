const dotenv = require("dotenv");
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(cookieParser());

dotenv.config({ path: "..//config.env" });
require("./database/db");

app.use(express.json());
app.use(require("./router/auth"));

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is Running at port no ${process.env.PORT}`);
});
