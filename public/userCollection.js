//Recipient Collection

var Backbone = require('backbone');
var UserModel = require('./userModel');

module.exports = Backbone.Collection.extend({
    url: 'get-users',
    model: UserModel,
    initialize: function () {
    }
});
