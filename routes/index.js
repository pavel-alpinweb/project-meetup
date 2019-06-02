const express = require("express");
const router = express.Router();

const ctrlHome = require("../controllers/home");
const ctrlAdmin = require("../controllers/admin");
const ctrlLogin = require("../controllers/login");

router.get("/", ctrlHome.get);
router.get("/admin", ctrlAdmin.get);
router.get("/login", ctrlLogin.get);
router.post("/welcomeText", ctrlAdmin.welcomeText);
router.post("/promoText", ctrlAdmin.promoText);
router.post("/contacts", ctrlAdmin.contacts);
router.post("/events", ctrlAdmin.events);
router.post("/headerSettings", ctrlAdmin.headerSettings);
router.post("/mainBackgorund", ctrlAdmin.mainBackgorund);
router.post("/gallery", ctrlAdmin.gallery);
router.delete("/gallery/:id", ctrlAdmin.galleryDelete);
router.post("/speakersList", ctrlAdmin.speakersList);
router.post("/speaker/:id", ctrlAdmin.speaker);
router.delete("/speaker/:id", ctrlAdmin.deleteSpeaker);
router.post("/speaker-photo", ctrlAdmin.addPhotoSpeaker);

module.exports = router;