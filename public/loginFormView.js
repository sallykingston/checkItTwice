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
  regiTemplate: _.template(tmpl.regiForm),
  renderRegi: function(){
    var markup = this.regiTemplate(this.model.toJSON());
    this.$el.append(markup);
    return this;
  },
  loginTemplate: _.template(tmpl.loginForm),
  renderLogin: function(){
    var markup = this.loginTemplate(this.model.toJSON());
    this.$el.append(markup);
    return this;
  }
});
