"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var CommonRepository = require("../repositories/commonRepository").CommonRepository;
var Genre = (function () {
  function Genre(commonRepository) {
    this.commonRepository = commonRepository;
  }

  _prototypeProperties(Genre, {
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
      value: function activate(routeParams) {
        return this.loadMovies(routeParams.id);
      },
      writable: true,
      enumerable: true,
      configurable: true
    },
    loadMovies: {
      value: function loadMovies(id) {
        var _this = this;
        return this.commonRepository.getMoviesByGenre(id).then(function (movies) {
          return _this.movies = movies.results;
        });
      },
      writable: true,
      enumerable: true,
      configurable: true
    }
  });

  return Genre;
})();

exports.Genre = Genre;