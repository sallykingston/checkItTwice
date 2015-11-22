//Recipient Collection

var Backbone = require('backbone');
var UserModel = require('./userModel');

module.exports = Backbone.Collection.extend({
    url: 'login',
    model: UserModel,
    initialize: function () {
    }
});
