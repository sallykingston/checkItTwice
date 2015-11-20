var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;
var tmpl = require('./templates');

module.exports = Backbone.View.extend({
  tagName: 'article',
  classname: 'recipient',
  template: _.template(tmpl.recipient),
  events: {
    'click .glyphicon-pencil': 'editRecipientInfo',
    'click .glyphicon-trash': 'deleteRecipient',
    'keypress h3,span': 'updateRecipient',
  },
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  },
  initialize: function () {},
  editRecipientInfo: function () {
    e.preventDefault();
    var recipientText = this.$el.find("span,h3");
    recipientText.attr("contenteditable",true);
    recipientText.toggleClass("editable");
  },
  updateRecipient: function () {
    if(e.charCode===13){
      var recipientEl = this.$el;
      var recipientText = recipientEl.find("p,h3");
      recipientText.attr("contenteditable",false);
      recipientText.toggleClass("editable");
      var recipient = this.model;
      var name = recipientEl.find("h3").text().trim();
      var budget =recipientEl.find("span").text().trim();
      recipient.save({name: name, budget:budget});
    }
  },
  deleteRecipient: function (){
      var recipientEl = this.$el;
      var recipient = this.model;
      recipient.destroy();
      recipientEl.remove();
  }

});
