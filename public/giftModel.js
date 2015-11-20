var Backbone = require('backbone');

  module.exports = Backbone.Model.extend({
    urlRoot: "http://tiny-tiny.herokuapp.com/collections/checkItTwiceGifts",
    idAttribute: "_id",
    defaults: function () {
      return {
        giftName: "null",
        giftCost: "null",
        giftId: "null"
      };
    },
    initialize: function () {};
  });
