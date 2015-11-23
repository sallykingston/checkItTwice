var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

var LayoutView = require('./layoutView');
var RecipientCollection = require('./recipientCollection');
var RecipientCollectionView = require('./recipientCollectionView');
var RecipientFormView = require('./recipientFormView');
var GiftCollectionView = require('./GiftCollectionView');
var GiftCollection = require('./giftCollection');
var GiftFormView = require('./giftFormView');


module.exports = Backbone.Router.extend({
  routes: {
    '': 'loginPage',
    'register': 'registerPage',
    'recipients': 'recipientsPage',
    'gifts/:id': 'giftPage'

  },
  initialize: function (options) {
    new LayoutView();
  },
  login: function () {
    console.log("you've made it to login!!");
  },

  recipientsPage: function () {
    console.log("you've made it to the recipients page");
    var recipientCollection = new RecipientCollection();
    var recipientForm = new RecipientFormView();
    $('.layoutView').html(recipientForm.render().el);
    recipientCollection.fetch().then(function () {
      console.log("fetched");
      var recipientsView = new RecipientCollectionView(recipientCollection);
      $('#layout').html(recipientsView.addAll().el);
    });

  },
  giftPage: function (recipientID) {
    console.log("you've made it to the gifts page");
    var giftCollection = new GiftCollection();
    var giftForm = new GiftFormView(recipientID);
    $('.layoutView').html(giftForm.render().el);
    giftCollection.fetch().then(function () {
      console.log("fetched");
      var giftsView = new GiftCollectionView(giftCollection, recipientID);
      $('#layout').html(giftsView.addAll().el);
    });
  }

});
