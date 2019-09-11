const keystone = require('keystone');
var Types = keystone.Field.Types;

var Mesaj = new keystone.List('Mesaj', {
  map: {
    name: 'isim'
  },
  nocreate: true
});
Mesaj.add({
  isim: {
    type: Types.Text
  },
  telefon: {
    type: Types.Text
  },
  email: {
    type: Types.Email
  },
  mesaj: {
    type: Types.Html,
    wysiwyg: true
  }
});
// Provide access to Keystone

Mesaj.schema.virtual('canAccessKeystone').get(function() {
  return true;
});


/*Registration*/
Mesaj.defaultColumns = 'isim,telefon,email,mesaj';
Mesaj.register();