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
    'click .login': 'userLogin',
  },
  initialize: function(){
    if(!this.model){
      this.model = new UserModel();
    }
  },
  createUser: function(){
    // var newUser = {
    //   user: this.$el.find('form').find('input[type="createUser"]').val(),
    //   password: this.$el.find('form').find('input[type="createPass"]').val(),
    // };
    // var newModel = new UserModel(newUser);
    // newModel.save();
    //route to recipeint page?
  },
  userLogin: function(e){
    e.preventDefault();
    console.log("logged in");
    window.location.hash = 'recipients';
    //how do we log a user in?
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
