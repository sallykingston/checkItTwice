var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: 'login',
  idAttribute: '_id',
  defaults:{
    username: '',
    password: '',
    budget: 0,
    // recipientList: ''
  },
  initialize: function(){

  }
});
