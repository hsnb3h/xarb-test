const express = require("express");
const router = express.Router();

const { getBalance, addMoney } = require("../controllers/controller");

router.post("/get-balance", getBalance);

router.post("/add-money", addMoney);

module.exports = router;
