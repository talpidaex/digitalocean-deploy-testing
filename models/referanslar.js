var keystone = require('keystone');
var Types = keystone.Field.Types;

var Referanslar = new keystone.List('Referanslar', {
  map: {
    name: 'referans'
  }
});

Referanslar.add({
  referans: {
    type: String,
    required: true,
    initial: true
  }
})

// Provide access to Keystone
Referanslar.schema.virtual('canAccessKeystone').get(function() {
  return true;
});

/*Registration*/
Referanslar.defaultColumns = 'referans';
Referanslar.register();