const express = require("express");
const mongoose = require("mongoose");
const app = express();
const pageRoute = require("./routes/pageRoute");
const courseRoute = require("./routes/courseRoute")
//*Connect DB
mongoose
  .connect("mongodb://127.0.0.1:27017/smartedu-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

//* Template Engine
app.set("view engine", "ejs");

//*MIDDLEWARES
app.use(express.static("public"));
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/courses",courseRoute);
app.use("/", pageRoute);

const port = 3001   ;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
