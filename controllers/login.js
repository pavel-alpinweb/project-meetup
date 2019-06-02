const db = require("../models/db");
const mainBackgorund = db.getState().mainBackgorund;

module.exports.get = function(req, res) {
    res.render("pages/login",{
        mainBackgorund: mainBackgorund
    });
};