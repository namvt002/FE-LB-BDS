const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const CookieParser = require("cookie-parser");
const session = require("express-session");
// const passport = require("passport");
// require("./lib/googleLogin");
const path = require("path");
global.publicPath = path.resolve("public/images");
const bodyParser = require("body-parser");
//---------------------------------------------------------------------------------------
const app = express();
app.use(morgan("dev"));
app.use(CookieParser());
app.use(express.json());

// cors option
app.use("/public", express.static(publicPath));
const corsOptions = {
  origin: true, //included origin as true
  credentials: true, //included credentials as true
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    req.headers.origin,
    "x-access-token, Origin, Content-Type, Accept",
    "Access-Control-Allow-Credentials"
  );
  next();
});



require("./routes/danhmuc")(app);


const PORT = process.env.PORT || PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
