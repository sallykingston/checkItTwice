// Recipient Model

var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  //thank you stack overflow for this
  url: function(){ "recipient/"
      return "recipient/?id=" +this.get("id");
    },
  
  defaults: {
    name: "Buddy the Elf",
    budget: 0,
    giftList: null,

  },
  initialize: function () {

  }
});
