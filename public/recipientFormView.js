var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var tmpl = require('./templates');
var RecipientModel = require('./recipientModel');

module.exports = Backbone.View.extend({
  className:'addRecipient',
  model: RecipientModel,
  events: {
    'click .submitRecipient': 'createUser',
  },
  initialize: function(){

  },
  createRecipient: function(){
    var newRecipient = {
      name: this.$el.find('form').find('input[type="recipientName"]').val(),
      budget: this.$el.find('form').find('input[type="recipientBudget"]').val(),
    };
    var newModel = new RecipientModel(newRecipient);
    newModel.save();
  },
  template: _.template(tmpl.recipientForm),
  render: function(){
    var markup = this.loginTemplate(this.model.toJSON());
    this.$el.append(markup);
    return this;
  }
});
