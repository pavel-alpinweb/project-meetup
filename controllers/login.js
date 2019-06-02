const db = require("../models/db");
const psw = require("../libs/password");
const mainBackgorund = db.getState().mainBackgorund;

module.exports.get = function(req, res) {
    res.render("pages/login",{
        mainBackgorund: mainBackgorund
    });
};

module.exports.enter = function(req, res) {
  const { login, password } = req.body;
  const user = db.getState().user;
  if (user.login === login && psw.validPassword(password)) {
    req.session.isAdmin = true;
    res.redirect("/admin");
  } else {
    req.session.isAdmin = false;
    res.redirect("/login");
  }
};