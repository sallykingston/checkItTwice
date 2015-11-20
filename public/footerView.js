var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;
var tmpl = require('./templates');

  module.exports = Backbone.View.extend({
    initialize: function () {},
    template: _.template(tmpl.footer),
    render: function () {
      var markup = this.template({
        this.$el.html(markup);
        return this;
      })
    }
  });
