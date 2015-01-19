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
          _this.movie = movie;
          _this.movie.release_date = _this.movie.release_date.substring(0, 4);
          _this.movie.poster_path = "http://image.tmdb.org/t/p/w500" + _this.movie.poster_path;
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