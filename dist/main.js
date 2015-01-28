"use strict";

exports.configure = configure;
var LogManager = require("aurelia-framework").LogManager;
var ConsoleAppender = require("aurelia-logging-console").ConsoleAppender;


LogManager.addAppender(new ConsoleAppender());
LogManager.setLevel(LogManager.levels.debug);

function configure(aurelia) {
  aurelia.use.defaultBindingLanguage().defaultResources().router().eventAggregator();

  aurelia.start().then(function (a) {
    return a.setRoot("app", document.body);
  });
}