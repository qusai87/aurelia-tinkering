"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var CommonRepository = require("../repositories/CommonRepository").CommonRepository;
var Genres = (function () {
  function Genres(commonRepository) {
    this.commonRepository = commonRepository;
  }

  _prototypeProperties(Genres, {
    inject: {
      value: function inject() {
        return [CommonRepository];
      },
      writable: true,
      enumerable: true,
      configurable: true
    }
  }, {
    activate: {
      value: function activate() {
        return this.loadGenres();
      },
      writable: true,
      enumerable: true,
      configurable: true
    },
    loadGenres: {
      value: function loadGenres() {
        var _this = this;
        return this.commonRepository.getGenres().then(function (genres) {
          console.table(genres.genres);
          return _this.genres = genres.genres;
        });
      },
      writable: true,
      enumerable: true,
      configurable: true
    }
  });

  return Genres;
})();

exports.Genres = Genres;