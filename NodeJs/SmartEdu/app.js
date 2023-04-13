const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const mongoStore = require("connect-mongo")
const app = express();
const pageRoute = require("./routes/pageRoute");
const courseRoute = require("./routes/courseRoute");
const categoryRoute = require("./routes/categoryRoute");
const userRoute = require("./routes/userRoute");
const MongoStore = require("connect-mongo");
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

//* GLOBAL VERIABLES
global.userIN = null;

//*MIDDLEWARES
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "my_keyboard_cat",
    resave: false,
    saveUnitialized: true,
    store: MongoStore.create({mongoUrl: "mongodb://127.0.0.1:27017/smartedu-db"})
  })
);

//*ROUTES
app.use("*", (req, res, next) => {
  userIN = req.session.userID;
  next();
});
app.use("/courses", courseRoute);
app.use("/categories", categoryRoute);
app.use("/users", userRoute);
app.use("/", pageRoute);

const port = 3001;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
