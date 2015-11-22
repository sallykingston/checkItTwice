//Recipient Collection

var Backbone = require('backbone');
var RecipientModel = require('./recipientModel');

module.exports = Backbone.Collection.extend({
    url: 'get-user',
    model: RecipientModel,
    initialize: function () {

    },
    comparator: function(a){
      return a.get("name");
    }
});
