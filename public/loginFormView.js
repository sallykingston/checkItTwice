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
    'click #loginBtn': 'createUser',
  },
  initialize: function(){
    if(!this.model){
      this.model = new UserModel();
    }
    console.log("made login form view");
  },
  createUser: function(e){
    e.preventDefault();
    console.log("submitted");
    var newUser = {
      username: this.$el.find('form').find('input[name="username"]').val(),
      password: this.$el.find('form').find('input[name="password"]').val(),
    };
    var newModel = new UserModel(newUser);
    newModel.save();
    window.location.hash = 'recipients';
  },
  loginTemplate: _.template(tmpl.loginForm),
  renderLogin: function(){
    var markup = this.loginTemplate(this.model.toJSON());
    this.$el.append(markup);
    return this;
  }
});
