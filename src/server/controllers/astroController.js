require("dotenv").config();
const debug = require("debug")("astrofactory:server:controllers");
const chalk = require("chalk");
const Astro = require("../../database/models/Astro");

const getAstros = async (req, res) => {
  debug(chalk.bold.cyanBright("Astros request received"));

  const astro = await Astro.find();
  res.status(200).json(astro);
};

const deleteAstro = async (req, res) => {
  debug(chalk.bold.redBright("Request to delete an Astro received"));

  const { idAstro } = req.params;

  await Astro.findByIdAndDelete(idAstro);
  res.status(200).json({
    msg: `Your Astro has been deleted (Astro number ${idAstro})`,
  });
};

module.exports = {
  getAstros,
  deleteAstro,
};
