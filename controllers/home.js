const db = require("../models/db");
const header = db.getState().header;
const mainBackgorund = db.getState().mainBackgorund;
const welcomeText = db.getState().welcomeText;
const promoText = db.getState().promoText;
const gallery = db.getState().gallery;
const events = db.getState().events;
const contacts = db.getState().contacts;
const speakers = db.getState().speakers;
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');

module.exports.get = function(req, res) {
  res.render("pages/index", {
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

module.exports.signupMail = function(req, res){
  const { name, email, phone, username } = req.body;
  const msg = {
    to: header.emailForRegistration,
    from: 'test@example.com',
    subject: 'Email form project Meetup',
    html: `
      <h1>Новоя заявка на регистрацию на встречу</h1>
      <p><b>Имя: </b>${name}</p>
      <p><b>Email: </b>${email}</p>
      <p><b>Телефон: </b>${phone}</p>
      <p><b>Пользователь: </b>${username}</p>
    `
  };
  sgMail.send(msg);
  res.send("Your request has been sent successfully!");
}