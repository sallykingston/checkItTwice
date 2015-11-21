var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var tmpl = require('./templates');
var GiftModel = require('./userModel');
module.exports = Backbone.View.extend({
  className: 'giftForm',
  model:null,
  events:{
    'click .addGift': 'addGift',
  },
  initialize: function(){
    if(!this.model){
      this.model = new GiftModel();
    }
  },
  addGift: function(e){
    e.preventDefault();
  },
  template: _.template(tmpl.giftForm),
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  },
});
