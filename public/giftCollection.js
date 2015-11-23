
var Backbone = require('backbone');
var GiftModel = require('./giftModel');
module.exports = Backbone.Collection.extend({
  url: 'gifts',
  model: GiftModel,
  initialize: function(id){
    this.id = id;
    this.url= function(){ "gifts/"
                return "gifts/?id=" +id;
                  };
  }
});
