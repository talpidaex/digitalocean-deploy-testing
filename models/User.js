var keystone = require('keystone');
var Types = keystone.Field.Types;

var User = new keystone.List('User');
//image ekleme için gerekli olanlar.
var myStorage = new keystone.Storage({
  adapter: keystone.Storage.Adapters.FS,
  fs: {
    path: keystone.expandPath('./')
  }
})
User.add({
  name: {
    type: String
  },
  email: {
    type: Types.Email
  },
  password: {
    type: Types.Password
  },
});

// Provide access to Keystone
User.schema.virtual('canAccessKeystone').get(function() {
  return true;
});

/*Registration*/
User.defaultColumns = 'name, email';
User.register();