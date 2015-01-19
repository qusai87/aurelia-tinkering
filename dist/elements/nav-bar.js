"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var Property = require("aurelia-framework").Property;
var NavBar = (function () {
  function NavBar() {}

  _prototypeProperties(NavBar, {
    annotations: {
      value: function annotations() {
        var prop = [new Property("router")];
        return prop;
      },
      writable: true,
      enumerable: true,
      configurable: true
    }
  });

  return NavBar;
})();

exports.NavBar = NavBar;