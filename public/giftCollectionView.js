var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;
var GiftModelView = require('./giftModelView');
var GiftCollection = require('./giftCollection');
var RecipientModel = require('./recipientModel');
var tmpl = require('./templates');

module.exports = Backbone.View.extend({
  el: '.layoutView',
  collection: null,
  initialize: function (collection, id, recipient) {
    this.collection = collection;
    this.collection.fetch(id);
    this.addRecHeader(recipient);
    this.addAll();
    this.totalCost(recipient);
    this.recipientID = id;
    this.listenTo(this.collection, 'add', this.addAll);
  },
  addOne: function (model){
    var giftModelView = new GiftModelView({model: model});
    this.$el.append(giftModelView.render().el);

  },
  addAll: function () {
    this.$el.find('article').remove();
    _.each(this.collection.models, this.addOne, this);
    return this;
  },
  totalCost: function(recipient){
    console.log('fired');
    var cost = 0;
    _.each(this.collection.models, function(el){
      console.log(el);
      cost += el.attributes.cost;
    });
    console.log(cost);
    $('.recCosts').html(cost);
    if(cost>recipient.attributes.budget){
      this.$el.find('p').addClass("overbudget");
    }
  },
  addRecHeader: function(recipient){
    template =  _.template(tmpl.recipientHeader);
    var markup = template(recipient.toJSON());
    this.$el.prepend(markup);
  }
});
