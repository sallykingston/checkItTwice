var Backbone = require('backbone');

  module.exports = Backbone.Model.extend({
    url: function(){ "gift/"
        return "gift/?id=" +this.get("id");
      },
    defaults: function () {
      return {
        name: "null",
        cost: "null"
      };
    },
    initialize: function () {},
  });
