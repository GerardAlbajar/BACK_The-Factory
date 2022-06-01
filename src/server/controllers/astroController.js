require("dotenv").config();
const debug = require("debug")("astrofactory:server:controllers");
const chalk = require("chalk");
const Astro = require("../../database/models/Astro");

const getAstros = async (req, res) => {
  debug(chalk.bold.cyanBright("Astros request received"));

  const astro = await Astro.find();
  res.status(200).json(astro);
};

module.exports = {
  getAstros,
};
