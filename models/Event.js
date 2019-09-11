// var keystone = require('keystone');
// var Types = keystone.Field.Types;
//
// var Event = new keystone.List('Event');
//
// Event.add({
//   baslik: {
//     type: String,
//     required: true,
//     initial: true
//   },
//   icerik: {
//     type: Types.Html,
//     wysiwyg: true
//   },
//   yayinTarihi: {
//     type: Types.Date,
//     index: true
//   },
// });
//
// Event.schema.virtual('canAccessKeystone').get(function() {
//   return true;
// });
// //
// // Event.schema.pre('save', function(next) {
// //   let event = this;
// //   if (event.isModified('published') && event.published) {
// //     this.publishDate = Date.now();
// //   }
// //   return next();
// // });
//
// Event.defaultColumns = 'baslik, icerik';
// Event.register();