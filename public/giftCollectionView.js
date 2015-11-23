var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;
var GiftModelView = require('./giftModelView');
var GiftCollection = require('./giftCollection');

module.exports = Backbone.View.extend({
  el: '.layoutView',
  collection: null,
  initialize: function (collection, id) {
    this.collection = collection;
    this.collection.fetch(id);
    this.addAll();
    this.recipientID = id;
    this.listenTo(this.collection, 'add', this.addAll);
  },
  addOne: function (model){
    var giftModelView = new GiftModelView({model: model});
    this.$el.prepend(giftModelView.render().el);
    this.totalCost();
  },
  addAll: function () {
    $('.giftsList').html('');
    _.each(this.collection.models, this.addOne, this);
    return this;
  },
  totalCost: function(){
    console.log('fired');
    var cost = 0;
    _.each(this.collection.models, function(el){
      console.log(el);
      cost += el.attributes.cost;
    });
    console.log(cost);
  }
});
