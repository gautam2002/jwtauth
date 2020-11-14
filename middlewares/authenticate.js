const jwt = require("jsonwebtoken");
require("dotenv").config();
const authenticate = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decode = jwt.verify(token, process.env.Secret_KEY);

    req.user = decode;
    next();
  } catch (error) {
    res.json({
      message: "Authentication Failed!",
    });
  }
};

module.exports = authenticate;
