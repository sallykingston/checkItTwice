var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var tmpl = require('./templates');
var ReciModel = require('./recipientModel');
module.exports = Backbone.View.extend({
  className: 'giftForm',
  model:null,
  events:{
    'submit .reciForm': 'addReci',
  },
  initialize: function(){
    if(!this.model){
      this.model = new ReciModel();
    }
  },
  addReci: function(e){
    e.preventDefault();
    console.log('fire');
  },
  template: _.template(tmpl.recipientForm),
  render: function(){
    console.log('rendered');
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  },
});
