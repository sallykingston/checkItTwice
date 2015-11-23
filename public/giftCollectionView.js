var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;
var GiftModelView = require('./giftModelView');
var GiftCollection = require('./giftCollection');

module.exports = Backbone.View.extend({
  el: '.giftsList',
  collection: null,
  initialize: function (collection, id) {
    this.collection = collection;
    this.collection.fetch(id);
    this.addAll();
    this.recipientID = id;
    this.listenTo(this.collection, 'add', this.addAll);
  },
  addOne: function (model) {
    console.log('fire');
    var giftModelView = new GiftModelView({model: model});
    this.$el.append(giftModelView.render().el);
  },
  addAll: function () {
    console.log('fire');
    $('.giftsList').html('');
    _.each(this.collection.models, this.addOne, this);
    return this;
  }
});
