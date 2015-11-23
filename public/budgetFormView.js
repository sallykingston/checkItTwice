var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var tmpl = require('./templates');
var UserModel = require('./userModel');
module.exports = Backbone.View.extend({
  className: 'giftForm',
  model:null,
  events:{
    'submit .budgetPost': 'addBudget',
  },
  initialize: function(){
    if(!this.model){
      this.model = new UserModel();

    }
  },
  addGift: function(e){
    e.preventDefault();
    var data = {
      budget: this.$el.find('input[name=budget]').val(),
    };
    this.model.set(data);
    var that = this;
    this.model.save();
  },
  template: _.template(tmpl.budgetForm),
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  },
});
