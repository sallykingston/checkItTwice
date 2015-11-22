var Backbone = require('backbone');
var GiftModel = require('./giftModel');
module.exports = Backbone.Collection.extend({
  url: 'http://tiny-tiny.herokuapp.com/collections/checkItTwiceGifts2',
  model: GiftModel,
  initialize: function(){
  }
});
