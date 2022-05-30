require("dotenv").config();
const express = require("express");
const { loginUser, registerUser } = require("../controllers/userController");

const usersRouters = express.Router();

usersRouters.post("/login", loginUser);
usersRouters.post("/register", registerUser);

module.exports = usersRouters;
