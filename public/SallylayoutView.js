var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var HeaderView = require('./headerView');
var FooterView = require('./footerView');
var LoginFormView = require('./loginFormView');

module.exports = Backbone.View.extend({
  el:'.layoutView',
   initialize: function(){
    var headerView = new HeaderView();
    var footerView = new FooterView();
    var loginFormView = new LoginFormView();

    $('header').html(headerView.render().el);
    this.$el.html(loginFormView.renderLogin().el);
    $('footer').html(footerView.render().el);
   }
 });
