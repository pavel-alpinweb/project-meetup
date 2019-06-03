const db = require("../models/db");
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');

module.exports.get = function(req, res) {
  res.render("pages/index", {
    header: db.getState().header,
    mainBackgorund: db.getState().mainBackgorund,
    welcomeText: db.getState().welcomeText,
    promoText: db.getState().promoText,
    gallery: db.getState().gallery,
    events: db.getState().events,
    contacts: db.getState().contacts,
    speakers: db.getState().speakers
  });
};

module.exports.signupMail = function(req, res){
  const { name, email, phone, username } = req.body;
  const header = db.getState().header;
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

module.exports.textMail = function(req, res){
  const { email, message } = req.body;
  const contacts = db.getState().contacts;
  const msg = {
    to: contacts.email,
    from: 'test@example.com',
    subject: 'Email form project Meetup',
    html: `
      <h1>Новое сообщение от пользователя</h1>
      <p><b>Email: </b>${email}</p>
      <p><b>Текст: </b>${message}</p>
    `
  };
  sgMail.send(msg);
  res.send("Your mail has been sent successfully!");
}