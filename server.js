const express = require("express");
const mongoose = require("mongoose");
const dbconnection =
  "mongodb+srv://admintom:admintom24@cluster0.6on2o.mongodb.net/<sellerCard>?retryWrites=true&w=majority";
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const route = require("./routes/api/router");
require("dotenv/config");

// db setup

mongoose
  .connect(dbconnection, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("db connected with ease....."))
  .catch((err) => console.log(err));
// middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// deployed url
// https://salesbookreceiptapp.herokuapp.com/
// routes
app.use("/api/", route),
  //production build

  // listening to port
  app.listen(port, () => {
    console.log(`server started peacefully on port ${port} say me`);
  });
