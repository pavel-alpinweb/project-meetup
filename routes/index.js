const express = require("express");
const router = express.Router();
const db = require("../models/db");
const mainBackgorund = db.getState().mainBackgorund;

const ctrlHome = require("../controllers/home");
const ctrlAdmin = require("../controllers/admin");
const ctrlLogin = require("../controllers/login");

const isAdmin = (req, res, next) => {
  // если в сессии текущего пользователя есть пометка о том, что он является
  // администратором
  if (req.session.isAdmin) {
    // то всё хорошо :)
    return next();
  }
  // если нет, то перебросить пользователя на страницу логина
  res.render("pages/login",{
    mainBackgorund: mainBackgorund
  });
};

router.get("/", ctrlHome.get);
router.get("/admin", isAdmin, ctrlAdmin.get);
router.get("/login", isAdmin, ctrlAdmin.get);
router.get("/out", ctrlLogin.out);
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
router.post("/login", ctrlLogin.enter);

module.exports = router;