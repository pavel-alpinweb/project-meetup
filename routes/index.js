const express = require("express");
const router = express.Router();

const ctrlHome = require("../controllers/home");

router.get("/", ctrlHome.get);

module.exports = router;