"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var Settings = (function () {
  function Settings() {}

  _prototypeProperties(Settings, null, {
    baseUrl: {
      get: function () {
        return "https://api.themoviedb.org/3";
      },
      enumerable: true,
      configurable: true
    }
  });

  return Settings;
})();

exports.Settings = Settings;