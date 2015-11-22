var $ = require('jquery');
var Backbone = require('backbone');
var Router = require('./router');

$(function () {

  new Router();
  Backbone.history.start();

});
