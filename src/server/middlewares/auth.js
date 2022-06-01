require("dotenv").config();
const jwt = require("jsonwebtoken");
const debug = require("debug")("astrofactory:server:middlewares:auth");

const auth = (req, res, next) => {
  const { authorization } = req.headers;
  try {
    if (!authorization.includes("Bearer")) {
      throw new Error("Bearer missing");
    }
    const token = authorization.replace("Bearer ", "");
    const userId = jwt.verify(token, process.env.JWT_SECRET_USER);

    req.userId = userId;

    debug("Correct user authenticated");

    next();
  } catch {
    const customError = new Error("Invalid Token");
    customError.statusCode = 401;
    next(customError);
  }
};

module.exports = { auth };
