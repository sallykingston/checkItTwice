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
      user: this.$el.find('form').find('input[type="createUser"]').val(),
      password: this.$el.find('form').find('input[type="createPass"]').val(),
    };
    var newModel = new UserModel(newUser);
    newModel.save();
  },
  userLogin: function(e){
    e.preventDefault();
    console.log("logged in");
    window.location.hash = 'recipients';
  },
  // regiTemplate: _.template(tmpl.regiForm),
  // renderRegi: function(){
  //   var markup = this.regiTemplate(this.model.toJSON());
  //   this.$el.append(markup);
  //   return this;
  // },
  loginTemplate: _.template(tmpl.loginForm),
  renderLogin: function(){
    var markup = this.loginTemplate(this.model.toJSON());
    this.$el.append(markup);
    return this;
  }
});
