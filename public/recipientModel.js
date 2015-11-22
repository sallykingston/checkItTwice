// Recipient Model

var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: 'http://tiny-tiny.herokuapp.com/collections/checkItTwiceRecipients',
  // urlRoot: 'add-recipient',
  idAttribute: '_id',
  defaults: {
    name: "Buddy the Elf",
    budget: 0,
    giftList: null,

  },
  initialize: function () {

  }
});
