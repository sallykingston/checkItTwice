// Recipient Model

var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: 'add-recipient',
  idAttribute: '_id',
  defaults: {
    name: "Buddy the Elf",
    budget: 0,
    giftList: null,

  },
  initialize: function () {

  }
});
