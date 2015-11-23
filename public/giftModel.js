var Backbone = require('backbone');

  module.exports = Backbone.Model.extend({
    urlRoot: "http://tiny-tiny.herokuapp.com/collections/checkItTwiceGifts3",
    idAttribute: "_id",
    defaults:{
        giftName: '',
        giftCost: '',
    },
    initialize: function () {},
  });
