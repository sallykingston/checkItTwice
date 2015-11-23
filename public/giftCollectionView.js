var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;
var GiftModelView = require('./giftModelView');
var GiftCollection = require('./giftCollection');

module.exports = Backbone.View.extend({
  el: '.giftsList',
  collection: null,
  initialize: function () {
    this.addAll();
    this.listenTo(this.collection, 'add', this.addAll);
  },
  addOne: function (model){
    var giftModelView = new GiftModelView({model: model});
    this.$el.prepend(giftModelView.render().el);
  },
  addAll: function () {
    $('.giftsList').html('');
    _.each(this.collection.models, this.addOne, this);
  }
});
