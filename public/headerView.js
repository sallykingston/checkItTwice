var Backbone = require('backbone');
var $ =  require('jquery');
var _ = require('underscore');
var tmpl = require('./templates');
Backbone.$ = $;

  module.exports = Backbone.View.extend({
      initialize: function () {},
      template: _.template(tmpl.header),
      events:{
        'click #recipients': 'retReci'
      },
      retReci: function(){
        window.location.hash = 'recipients';
        location.reload();
      },
      render: function () {
        var markup = this.template({});
        this.$el.html(markup);
        return this;
      }
  });
