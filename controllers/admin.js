const db = require("../models/db");
const fs = require("fs");
const multiparty = require('multiparty');

const header = db.getState().header;
const mainBackgorund = db.getState().mainBackgorund;
const welcomeText = db.getState().welcomeText;
const promoText = db.getState().promoText;
const gallery = db.getState().gallery;
const events = db.getState().events;
const contacts = db.getState().contacts;
const speakers = db.getState().speakers;

function saveFile(req, res, dbFunction, callbackdata){
  // create a form to begin parsing
  var form = new multiparty.Form();
  var uploadFile = {uploadPath: ''};
  var errors = [];

  form.on('error', function(err){
      if(fs.existsSync(uploadFile.path)) {
          fs.unlinkSync(uploadFile.path);
          console.log('error');
      }
  });

  form.on('close', function() {
      if(errors.length == 0) {
          res.send({status: 'ok', text: 'Изображение сохраненно!', data: callbackdata});
      }
      else {
          if(fs.existsSync(uploadFile.path)) {
              fs.unlinkSync(uploadFile.path);
          }
          res.send({status: 'bad', errors: errors});
      }
  });

  // listen on part event for image file
  form.on('part', function(part) {
      uploadFile.path = "./public/content/" + part.filename;

      if(errors.length == 0) {
          var out = fs.createWriteStream(uploadFile.path);
          part.pipe(out);
          dbFunction(part.filename);
      }
      else {
          part.resume();
      }
  });

  // parse the form
  form.parse(req);
}

function saveMainBgInDB(filename){
  db.set("mainBackgorund", `content/${filename}`).write();
}

function saveGalleryInDb(filename){
  db.get("gallery").push({
    src: `content/${filename}`,
    id: Date.now(),
  })
  .write();
}

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

module.exports.headerSettings = function(req, res){
  db.set("header", req.body).write();
  res.send("Настройки главного экрана обновленны!");
};

module.exports.mainBackgorund = function(req, res){
  saveFile(req, res, saveMainBgInDB);
}

module.exports.gallery = function(req, res){
  saveFile(req, res, saveGalleryInDb, gallery);
}

module.exports.galleryDelete = function(req, res){
  const id = parseInt(req.params.id);
  console.log(req.params.id);
  db.get('gallery').remove({ id: id }).write();
  res.send("Изображение удаленно!");
}