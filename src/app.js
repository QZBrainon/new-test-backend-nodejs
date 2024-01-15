const express = require("express");
const cors = require("cors");
const errorHandler = require("./middlewares/errorHandler");
require("express-async-errors");
const productRouter = require("./routes/productRouter");
const categoryRouter = require("./routes/categoryRouter");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", productRouter);
app.use("/api/categories", categoryRouter);

app.use(errorHandler);

module.exports = app;
