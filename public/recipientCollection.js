//Recipient Collection

var Backbone = require('backbone');
var RecipientModel = require('./recipientModel');

module.exports = Backbone.Collection.extend({
    // url: 'http://tiny-tiny.herokuapp.com/collections/checkItTwiceRecipients',
    url: 'recipients',
    model: RecipientModel,
    initialize: function () {

    },
    comparator: function(a){
      return a.get("name");
    }
});
