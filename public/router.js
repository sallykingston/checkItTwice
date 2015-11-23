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
var BudgetFormView = require('./budgetFormView');

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
    var budgetForm = new BudgetFormView();
    $('.layoutView').html(recipientForm.render().el);
    $('.layoutView').append(budgetForm.render().el);
    recipientCollection.fetch().then(function () {
      console.log("fetched");
      var recipientsView = new RecipientCollectionView(recipientCollection);
    });

  },
  giftPage: function (recipientID) {
    console.log("you've made it to the gifts page");
    var recipientCollection = new RecipientCollection();
    recipientCollection.fetch().then(function () {
      var recipient = recipientCollection.get(recipientID);
      var giftCollection = new GiftCollection(recipientID);
      var giftForm = new GiftFormView(recipientID);
      $('.layoutView').html(giftForm.render().el);
      giftCollection.fetch().then(function () {
        console.log("fetched");
        var giftsView = new GiftCollectionView(giftCollection, recipientID, recipient);
      });
    });
  }

});
