require("dotenv").config();
const debug = require("debug")("astrofactory:controllers:userController");
const bcrypt = require("bcrypt");
const chalk = require("chalk");
const jsonwebtoken = require("jsonwebtoken");
const User = require("../../database/models/User");

const loginUser = async (req, res, next) => {
  const username = req.body.username.toString();
  const password = req.body.password.toString();

  const user = await User.findOne({ username });

  if (!user) {
    const error = new Error("Incorrect password");
    error.statusCode = 403;
    error.customMessage = "Username or password wrong";

    next(error);
  } else {
    const userData = {
      name: user.name,
      username: user.username,
      id: user.id,
    };
    const rightPassword = await bcrypt.compare(password, user.password);

    if (!rightPassword) {
      const error = new Error("Incorrect password");
      error.statusCode = 403;
      error.customMessage = "Username or password wrong";

      next(error);
    } else {
      const token = jsonwebtoken.sign(userData, process.env.JWT_SECRET_USER);

      res.status(200).json({ token });
    }
  }
};

const registerUser = async (req, res, next) => {
  const { name, mail, username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      const encryptedPassword = await bcrypt.hash(password, 10);

      const newUser = {
        name,
        mail,
        username,
        password: encryptedPassword,
      };

      await User.create(newUser);

      res.status(201).json({ user: name });
    } else {
      const userError = new Error();
      userError.customMessage = "This username already exists";
      userError.statusCode = 409;
      next(userError);
    }
  } catch (error) {
    next(error);
  }
};

const getUsers = async (req, res) => {
  debug(chalk.bold.cyanBright("Users request received"));

  const users = await User.find()
    .select("-password")
    .populate({
      path: "inventory",
      populate: [
        {
          path: "perfect",
        },
        {
          path: "part",
        },
      ],
    });

  res.status(200).json(users);
};

module.exports = { loginUser, registerUser, getUsers };
