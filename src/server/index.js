const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const { notFoundError, generalError } = require("./middlewares/errors");
const usersRouters = require("./routers/userRouters");
const astroPartRouter = require("./routers/astropartRouters");
const astroRouter = require("./routers/astroRouter");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(helmet());

app.use("/user", usersRouters);
app.use("/astroparts", astroPartRouter);
app.use("/astros", astroRouter);

app.use(notFoundError);
app.use(generalError);

module.exports = app;
