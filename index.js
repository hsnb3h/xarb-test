const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv").config();

const app = express();
const sequelize = require("./db/db")

// Routes
const routes = require("./routes/routes");

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/", routes);

// PORT
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
  console.log(`App is running at ${port}`);
});
