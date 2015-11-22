var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

var LayoutView = require('./layoutView');
var RecipientCollection = require('./recipientCollection');
var RecipientCollectionView = require('./recipientCollectionView');
var RecipientFormView = require('./recipientFormView');

module.exports = Backbone.Router.extend({
  routes: {
    '': 'loginPage',
    'register': 'registerPage',
    'recipients': 'recipientsPage',
    'gifts': 'giftPage'

  },
  initialize: function (options) {
    new LayoutView();
  },
  login: function () {
    console.log("you've made it to login!!");
  },
  registerPage: function(){

  },
  recipientsPage: function () {
    console.log("you've made it to the recipients page");
    var recipientCollection = new RecipientCollection();
    var recipientForm = new RecipientFormView();
    recipientCollection.fetch().then(function () {
      var recipientsView = new RecipientCollectionView(recipientCollection);
      $('#layout').html(recipientsView.addAll().el);
      $('#form').html(recipientForm.render().el);
    });

  },
  giftPage: function () {
    console.log("you've made it to the gifts page");

  }

});
