//Gift Collection

var Backbone = require('backbone');
var GiftModel = require('./giftModel');

module.exports = Backbone.Collection.extend({
    url: 'http://tiny-tiny.herokuapp.com/collections/checkItTwiceGifts',
    model: GiftModel,
    initialize: function () {
    },
    comparator: function(a){
      return a.get("name");
    }
});
