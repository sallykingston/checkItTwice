var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var tmpl = require('./templates');
var GiftModel = require('./giftModel');
module.exports = Backbone.View.extend({
  className: 'giftForm',
  model: null,
  events:{
    'click #addGift': 'addGift',
  },
  initialize: function(id){
    if(!this.model){
      this.model = new GiftModel();
    }
    this.id = id;
    // this.collection = collection;
  },
  addGift: function(e){
    e.preventDefault();
    console.log("adding gift");
    var newGift = {
      name:this.$el.find('input[name=createGift]').val(),
      cost:this.$el.find('input[name=createGiftPrice]').val(),
    };
    // this.model.set(data);
    console.log(this.model);
    var newModel = new GiftModel(newGift);
    newModel.url = "gift/?id="+this.id;
    newModel.save(newGift);
    this.$el.find('form').find('input').val("");
  },
  template: _.template(tmpl.giftForm),
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  },
});
