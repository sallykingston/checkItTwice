var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var tmpl = require('./templates');

module.exports = Backbone.View.extend({
    // model: "null",
    initialize: function () {},
    template: _.template(tmpl.gift),
    render: function () {
      var markup = this.template(this.model.toJSON());
      this.$el.html(markup);
      return this;
    }
  });
