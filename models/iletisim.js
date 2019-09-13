var keystone = require('keystone');
var Types = keystone.Field.Types;

var Iletisim = new keystone.List('Iletisim', {
  map: {
    name: 'email'
  }
});

Iletisim.add({
  adres: {
    type: Types.Text,
    required: true,
    initial: true
  },
  telefon: {
    type: Types.Text,
    required: true,
    initial: true
  },
  telefon2: {
    type: Types.Text,
    required: false,
    initial: true
  },
  email: {
    type: Types.Email,
    required: true,
    initial: true
  }
});
// Provide access to Keystone
Iletisim.schema.virtual('canAccessKeystone').get(function() {
  return true;
});

/*Registration*/
Iletisim.defaultColumns = 'adres,telefon,telefon2,email';
Iletisim.register();