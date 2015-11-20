var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var tmpl = require('./templates');
var UserModel = require('./userModel');
module.exports = Backbone.View.extend({
  className:'addUser',
  model: null,
  events: {
    'click .register': 'createUser',
  },
  initialize: function(){
    if(!this.model){
      this.model = new UserModel();
    }
  },
  createUser: function(){

  },
  template: _.template(tmpl.regiForm),
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  },
});
