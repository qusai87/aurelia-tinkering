"use strict";

var Router = require("aurelia-router").Router;
var App = function App(router) {
  this.router = router;
  this.router.configure(function (config) {
    config.title = "Gusten Movie DB";
    config.map([{ route: ["", "start"], moduleId: "modules/start", nav: false, title: "Start" }]);
  });
};

App.inject = function () {
  return [Router];
};

exports.App = App;