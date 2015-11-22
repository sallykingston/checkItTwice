var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;
var RecipientView = require('./recipientModelView');
var RecipientModel = require('./recipientModel')
var RecipientCollection = require('./recipientCollection');

module.exports = Backbone.View.extend({
  el: '#layoutView',
  initialize: function () {
    this.collection = new RecipientCollection;
    this.addAll();
    // this.listenTo(this.collection, 'change', this.addAll);
    // this.listenTo(this.collection, 'sort', this.addAll);
  },
  addOne: function (recipientModel) {
    var recipientView = new RecipientView({model: recipientModel});
    this.$el.append(recipientView.render().el);

  },
  addAll: function () {
    this.$el.html("");
    _.each(this.collection.models, this.addOne, this);
    return this;
  },
})
