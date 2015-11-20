var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: 'http://tiny-tiny.herokuapp.com/collections/checkItTwiceUsers',
  idAttribute: '_id',
  defaults:{
    user: '',
    pass: '',
    budget: '',
    recipientList: ''
  },
  initialize: function(){

  }
});
