var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;
var tmpl = require('./templates');

module.exports = Backbone.View.extend({
  tagName: 'article',
  className: 'recipient',
  template: _.template(tmpl.recipient),
  events: {
    'click .glyphicon-pencil': 'editRecipientInfo',
    'click .glyphicon-trash': 'deleteRecipient',
    'click .glyphicon-gift': 'addGifts',
    'keypress .recName, .recBudget': 'updateRecipient',
  },
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  },
  initialize: function () {},
  editRecipientInfo: function (e) {
    e.preventDefault();
    console.log("editing");
    var recipientText = this.$el.find(".recName, .recBudget");
    recipientText.attr("contenteditable",true);
    recipientText.toggleClass("editable");
  },
  updateRecipient: function (e) {
    if(e.charCode===13){
      var recipientEl = this.$el;
      var recipientText = recipientEl.find(".recName, .recBudget");
      recipientText.attr("contenteditable",false);
      recipientText.toggleClass("editable");
      var recipient = this.model;
      var name = recipientEl.find(".recName").text().trim();
      var budget =recipientEl.find(".recBudget").text().trim();
      recipient.save({id: recipient.attributes.id, name: name, budget:budget});

    };
  },
  deleteRecipient: function (e){
    e.preventDefault();
    console.log("deleting");
    var recipientEl = this.$el;
    var recipient = this.model;
    recipient.destroy();
    recipientEl.remove();
  },
  addGifts: function (e) {
    e.preventDefault();
    window.location.hash = 'gifts/'+this.model.attributes.id;
  }

});
