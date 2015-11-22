var $ = require('jquery');
var Router = require('./router');
var Backbone = require('backbone');


$(function () {

  new Router();
  Backbone.history.start();
});
