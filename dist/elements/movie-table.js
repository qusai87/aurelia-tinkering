"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var Behavior = require("aurelia-framework").Behavior;
var MovieTable = (function () {
  function MovieTable() {}

  _prototypeProperties(MovieTable, {
    metadata: {
      value: function metadata() {
        return Behavior.withProperty("movies").withProperty("title");
      },
      writable: true,
      enumerable: true,
      configurable: true
    }
  }, {
    favorite: {
      value: function favorite(movie) {
        movie.favorite = !movie.favorite;
      },
      writable: true,
      enumerable: true,
      configurable: true
    }
  });

  return MovieTable;
})();

exports.MovieTable = MovieTable;