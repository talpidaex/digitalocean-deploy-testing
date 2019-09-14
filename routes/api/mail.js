var keystone = require('keystone');
var Mesaj = keystone.list('Mesaj'); //mesaj collectiona ekleme yapacağız.



module.exports = function(req, res) {
  if (!req.body.isim || !req.body.telefon || !req.body.email || !req.body.mesaj) {
    return res.redirect("/iletisim");
  } else {
    var newMesaj = new Mesaj.model();
    Mesaj.updateItem(newMesaj, req.body, function(err) {
      res.locals.enquirySubmitted = true;
      if (err) res.locals.saveError = true;
      res.redirect("/iletisim");
    });
  }
}

// if (!req.body.baslik || !req.body.icerik) {
//   return res.sendError('incomplete data set');
// } else {
//   var newEvent = new Event.model();
//   Event.updateItem(newEvent, req.body, function(err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Post başarılı");
//       res.redirect("/");
//     }
//   })
// }