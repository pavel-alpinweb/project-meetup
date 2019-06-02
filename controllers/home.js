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
  const msg = {
    to: 'pavel.alpinweb@yandex.ru',
    from: 'test@example.com',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  sgMail.send(msg);
  res.redirect("/");
}