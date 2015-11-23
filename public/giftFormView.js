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
    'submit #addGift': 'addGift',
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
    var data = {
      giftName:this.$el.find('input[name=createGift]').val(),
      giftCost:this.$el.find('input[name=createGiftPrice]').val(),
      id:this.id
    };
    this.model.set(data);
    console.log(this.model);
    var that = this;
    this.model.save().then(function(){
      that.collection.create(this.model);
    });
  },
  template: _.template(tmpl.giftForm),
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  },
});
