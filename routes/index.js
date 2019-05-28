const express = require("express");
const router = express.Router();

const ctrlHome = require("../controllers/home");
const ctrlAdmin = require("../controllers/admin");

router.get("/", ctrlHome.get);
router.get("/admin", ctrlAdmin.get);
router.post("/welcomeText", ctrlAdmin.welcomeText);
router.post("/promoText", ctrlAdmin.promoText);
router.post("/contacts", ctrlAdmin.contacts);
router.post("/events", ctrlAdmin.events);
router.post("/headerSettings", ctrlAdmin.headerSettings);

module.exports = router;