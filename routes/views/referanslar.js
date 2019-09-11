var keystone = require('keystone');
var referanslar = keystone.list('referanslars');



module.exports = function(req, res) {
  referanslar.model.find({}, function(err, results) {
    if (!err) {
      res.render("referanslar", {
        results: results
      });
      console.log(results)
    } else {
      console.log(err);
    }
  });


}