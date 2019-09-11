var keystone = require('keystone');
var Iletisim = keystone.list('Iletisim');

module.exports = function(req, res) {
  Iletisim.model.find({}, function(err, results) {
    if (!err) {
      res.render("iletisim", {
        results: results
      });
    }
  });
};