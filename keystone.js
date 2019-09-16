var keystone = require('keystone');


keystone.import('models');

keystone.init({
  'static': ['public'],
  'cookie secret': 'secure string goes here',
  'views': 'templates/views',
  'view engine': 'ejs',
  'name': 'Testing', //DB adı
  'auto update': true,
  'auth': true,
  'port': 80,
  'user model': 'User', //kullanılacak collection adı

});

keystone.set('routes', require("./routes"));

keystone.set('nav', {
  'Kullanicilar': 'users',
  'Iletisim bilgileri': 'iletisims',
  'Gelen Mesajlar': 'mesajs',
  'Referanslar': 'referanslars'
});

keystone.start();