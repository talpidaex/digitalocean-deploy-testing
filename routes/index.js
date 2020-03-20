var keystone = require('keystone');
var importRoutes = keystone.importer(__dirname);

//Central Yönlendirici,tüm route ayarları burada yapılacak.

var routes = {
  views: importRoutes('./views'),
  api: importRoutes('./api')
};

exports = module.exports = function(app) {
  app.get('/', routes.views.anasayfa);
  app.get("/kurumsal", routes.views.kurumsal);
  app.get("/bacatemizleme", routes.views.bacatemizleme);
  app.get("/ilaclama", routes.views.ilaclama);
  app.get('/iletisim', routes.views.iletisim);
  app.get('/referanslar', routes.views.referanslar);

  app.post('/api/mail', routes.api.mail);
};