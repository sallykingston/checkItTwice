var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;
var RecipientView = require('./recipientModelView');
var RecipientModel = require('./recipientModel')
var RecipientCollection = require('./recipientCollection');

module.exports = Backbone.View.extend({
  el: '.layoutView',
  initialize: function (collection) {
    this.collection = collection;
    this.collection.fetch();
    console.log("collection", this.collection);
    this.addAll();
    this.listenTo(this.collection, 'add', this.addAll);
    this.listenTo(this.collection, 'sort', this.addAll);
  },
  addOne: function (recipientModel) {
    var recipientView = new RecipientView({model: recipientModel});
    this.$el.append(recipientView.render().el);

  },
  addAll: function () {
    _.each(this.collection.models, this.addOne, this);
    return this;
  },
})
