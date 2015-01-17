"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var Router = require("aurelia-router").Router;
var App = (function () {
  function App(router) {
    this.router = router;
    this.router.configure(function (config) {
      config.title = "Gusten Movie DB";
      config.map([{ route: ["", "start"], moduleId: "modules/start", nav: true, title: "Start" }, { route: ["", "movies/:id"], moduleId: "modules/movies", nav: true, title: "Movies" }]);
    });
  }

  _prototypeProperties(App, {
    inject: {
      value: function inject() {
        return [Router];
      },
      writable: true,
      enumerable: true,
      configurable: true
    }
  });

  return App;
})();

exports.App = App;