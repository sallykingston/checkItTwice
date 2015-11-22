var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var HeaderView = require('./headerView');
var FooterView = require('./footerView');
var LoginFormView = require('./loginFormView');
var RecipientCollection = require('./recipientCollection');
var RecipientCollectionView = require('./recipientCollectionView');

module.exports = Backbone.Router.extend({
  routes: {
    '': 'loginPage',
    'register': 'registerPage',
    'recipients': 'recipientsPage',
    'gifts': 'giftPage'

  },
  initialize: function (options) {
    var headerHTML = new HeaderView();
    var footerHTML = new FooterView();
    var loginFormHTML = new LoginFormView();
    $('header').html(headerHTML.render().el);
    $('#layout').html(loginFormHTML.renderLogin().el);
    $('footer').html(footerHTML.render().el);

  },
  login: function () {
    console.log("you've made it to login!!");
  },
  registerPage: function(){

  },
  recipientsPage: function () {
    console.log("you've made it to the recipients page");
    var recipientCollection = new RecipientCollection();
    recipientCollection.fetch().then(function () {
      var recipientsView = new RecipientCollectionView(recipientCollection);
      $('#layout').html(recipientsView.addAll().el);
    });

  },
  giftPage: function () {
    console.log("you've made it to the gifts page");

  }

});
