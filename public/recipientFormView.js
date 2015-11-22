var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var tmpl = require('./templates');
var RecipientModel = require('./recipientModel');

module.exports = Backbone.View.extend({
  className:'addRecipient',
  model: null,
  events: {
    'click #addRecipientBtn': 'createRecipient',
  },
  initialize: function(){
    if(!this.model){
      this.model = new RecipientModel();
    }
    console.log("made recipient form view");
  },
  createRecipient: function(e){
    e.preventDefault();
    console.log("recipient added");
    var newRecipient = {
      name: this.$el.find('form').find('input[name="recipientName"]').val(),
      budget: this.$el.find('form').find('input[name="recipientBudget"]').val(),
    };
    var newModel = new RecipientModel(newRecipient);
    newModel.save();
  },
  template: _.template(tmpl.recipientForm),
  render: function(){
    var markup = this.template(this.model.toJSON());
    this.$el.append(markup);
    return this;
  }
});
