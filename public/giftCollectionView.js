var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;
var GiftView = require('./giftCollectionView');
var GiftModel = require('./giftModel')

module.exports = Backbone.View.extend({
  el: '.gifts',
  initialize: function () {
    this.addAll();
    this.listenTo(this.collection, 'change', this.addAll);
    this.listenTo(this.collection, 'sort', this.addAll);
  },
  addOne: function (giftModel) {
    var giftView = new GiftView({model: giftModel});
    this.$el.append(giftView.render().el);

  },
  addAll: function () {
    this.$el.html("");
    _.each(this.collection.models, this.addOne, this);
  },
})
