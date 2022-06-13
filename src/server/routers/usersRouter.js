require("dotenv").config();
const express = require("express");
const { getUsers } = require("../controllers/userController");

const usersFunctionalitiesRouters = express.Router();

usersFunctionalitiesRouters.get("/", getUsers);

module.exports = usersFunctionalitiesRouters;
