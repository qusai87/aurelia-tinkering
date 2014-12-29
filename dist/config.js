"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var Config = function Config() {};

_prototypeProperties(Config, null, {
  baseUrl: {
    get: function () {
      return "api.themoviedb.org/3/";
    },
    enumerable: true
  }
});

exports.Config = Config;