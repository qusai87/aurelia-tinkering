"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var AppConfig = function AppConfig() {};

_prototypeProperties(AppConfig, null, {
  baseUrl: {
    get: function () {
      return "https://api.themoviedb.org/3";
    },
    enumerable: true
  }
});

exports.AppConfig = AppConfig;