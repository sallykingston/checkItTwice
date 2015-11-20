var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var HeaderView = require('./headerView');
var FooterView = require('./footerView');
var RecipientCollection = require('./recipientCollection');
var RecipientCollectionView = require('./recipientCollectionView');
var GiftCollection = require('./giftCollection');
var GiftCollectionView = require('./giftCollectionView');
var BudgetFormView = require('./budgetFormView');
var GiftFormView = require('./giftFormView');
var LoginFormView = require('./loginFormView');
var RecipientFormView = require('./recipientFormView');

module.exports = Backbone.View.extend({
  el:'.layoutCont',
   initialize: function(){
     var that = this;
     var headerHTML = new HeaderView();
     var footerHTML = new FooterView();
     var loginFormHTML = new LoginFormView();
//     this.$el.find('.loginCont').html(loginFormView.render().el);
//     var recipientCollection = new RecipientCollection();
//     recipientCollection.fetch().then(function(){
//       var recipientCollectionView = new RecipientCollectionView({collection: recipientCollection});
//       var giftCollection = new GiftCollection();
//       giftCollection.fetch().then(function(){
//         var giftCollectionView = new GiftCollectionView({collection: giftCollection});
        var giftFormHTML = new GiftFormView();
//       });
      that.$el.find('header').html(headerHTML.render().el);
      that.$el.find('.gifts').html(giftFormHTML.render().el);
      that.$el.find('.loginCont').html(loginFormHTML.render().el);
      that.$el.find('footer').html(footerHTML.render().el);
//     });
   },
 });
