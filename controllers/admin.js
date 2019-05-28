const db = require("../models/db");
const header = db.getState().header;
const mainBackgorund = db.getState().mainBackgorund;
const welcomeText = db.getState().welcomeText;
const promoText = db.getState().promoText;
const gallery = db.getState().gallery;
const events = db.getState().events;
const contacts = db.getState().contacts;
const speakers = db.getState().speakers;

module.exports.get = function(req, res) {
  res.render("pages/admin", {
    header: header,
    mainBackgorund: mainBackgorund,
    welcomeText: welcomeText,
    promoText: promoText,
    gallery: gallery,
    events: events,
    contacts: contacts,
    speakers: speakers
  });
};

module.exports.welcomeText = function(req, res){
  db.set("welcomeText", req.body).write();
  res.send("Приветственный текст обновлен!");
};

module.exports.promoText = function(req, res){
  db.set("promoText", req.body).write();
  res.send("Промо текст обновлен!");
};

module.exports.contacts = function(req, res){
  db.set("contacts", req.body).write();
  res.send("Контакты обновленны!");
};

module.exports.events = function(req, res){
  db.set("events", req.body).write();
  res.send("Список событий обновлен!");
};