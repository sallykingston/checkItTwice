var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: 'login',
  idAttribute: '_id',
  defaults:{
    user: '',
    password: '',
    budget: '',
    recipientList: ''
  },
  initialize: function(){

  }
});
