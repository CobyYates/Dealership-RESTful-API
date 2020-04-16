import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { adminRouter } from "./routes/admin.route";


const app = express();
let port = 3000;

app.use(
  bodyParser.urlencoded({
    limit: "5mb",
    extended: false,
  })
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(express.static("public"));

app.use("/admin", adminRouter);

app.use("/api", function (req, res, next) {
  res.send(`You hit my API`);
  next();
});

if (port == null || port == "") {
  port = 3000;
}

const dotenv = require("dotenv")
dotenv.config()

require("dotenv").config({ path: "ENV_FILENAME" })
mongoose
  .set("useFindAndModify", false)
  .connect(process.env.MongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
  )
  .then((result) => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => console.log(err));
