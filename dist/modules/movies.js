"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var MovieRepository = require("../repositories/movieRepository").MovieRepository;
var Movies = (function () {
  function Movies(movieRepository) {
    this.movieRepository = movieRepository;
    this.title = "";
  }

  _prototypeProperties(Movies, {
    inject: {
      value: function inject() {
        return [MovieRepository];
      },
      writable: true,
      enumerable: true,
      configurable: true
    }
  }, {
    activate: {
      value: function activate(routeParams) {
        return this.loadMovie(routeParams.id);
      },
      writable: true,
      enumerable: true,
      configurable: true
    },
    loadMovie: {
      value: function loadMovie(id) {
        var _this = this;
        return this.movieRepository.getById(id).then(function (movie) {
          console.log(movie);
          _this.title = movie.title;
          console.table(movie);
        });
      },
      writable: true,
      enumerable: true,
      configurable: true
    }
  });

  return Movies;
})();

exports.Movies = Movies;