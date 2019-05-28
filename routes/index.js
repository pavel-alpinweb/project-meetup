const express = require("express");
const router = express.Router();

const ctrlHome = require("../controllers/home");
const ctrlAdmin = require("../controllers/admin");

router.get("/", ctrlHome.get);
router.get("/admin", ctrlAdmin.get);
router.post("/welcomeText", ctrlAdmin.welcomeText);

module.exports = router;