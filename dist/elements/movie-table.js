"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var Behavior = require("aurelia-framework").Behavior;
var EventAggregator = require("aurelia-event-aggregator").EventAggregator;
var MovieTable = (function () {
  function MovieTable(eventAggregator) {
    this.eventAggregator = eventAggregator;
  }

  _prototypeProperties(MovieTable, {
    metadata: {
      value: function metadata() {
        return Behavior.withProperty("movies").withProperty("title");
      },
      writable: true,
      enumerable: true,
      configurable: true
    },
    inject: {
      value: function inject() {
        return [EventAggregator];
      },
      writable: true,
      enumerable: true,
      configurable: true
    }
  }, {
    favorite: {
      value: function favorite(movie) {
        var movieFavObj = {};
        movie.favorite = !movie.favorite;
        movieFavObj.fav = movie.favorite;
        movieFavObj.movie = movie;

        this.eventAggregator.publish("movieFavorited", movieFavObj);
      },
      writable: true,
      enumerable: true,
      configurable: true
    }
  });

  return MovieTable;
})();

exports.MovieTable = MovieTable;