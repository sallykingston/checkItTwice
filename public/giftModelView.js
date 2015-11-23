var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var tmpl = require('./templates');

module.exports = Backbone.View.extend({
    // model: "null",
    tagName: 'article',
    className: 'gift',
    events: {
      'click .glyphicon-pencil': 'editGiftInfo',
      'click .glyphicon-trash': 'deleteGift',
      'keypress h3,span': 'updateGift',
    },
    initialize: function () {},
    template: _.template(tmpl.gift),
    render: function () {
      var markup = this.template(this.model.toJSON());
      this.$el.html(markup);
      return this;
    },
    editGiftInfo: function (e) {
      e.preventDefault();
      console.log("editing");
      var giftText = this.$el.find("h3");
      giftText.attr("contenteditable",true);
      giftText.toggleClass("editable");
    },
    updateGift: function (e) {
      if(e.charCode===13){
        var giftEl = this.$el;
        var giftText = giftEl.find("h3");
        giftText.attr("contenteditable",false);
        giftText.toggleClass("editable");
        var gift = this.model;
        var name = giftEl.find(".giftName").text().trim();
        var cost =giftEl.find(".giftCost").text().trim();
        gift.save({id: gift.attributes.id, name: name, cost:cost});

      };
    },
    deleteGift: function (e){
      e.preventDefault();
      console.log("deleting");
      var giftEl = this.$el;
      var gift = this.model;
      gift.destroy();
      giftEl.remove();
    }
  });
