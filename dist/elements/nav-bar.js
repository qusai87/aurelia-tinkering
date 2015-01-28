"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var Behavior = require("aurelia-framework").Behavior;
var EventAggregator = require("aurelia-event-aggregator").EventAggregator;
var NavBar = (function () {
  function NavBar(eventAggregator) {
    this.searchText = "";
    this.eventAggregator = eventAggregator;
    this.movieFavoriteCount = 0;
    this.wireupSubscriptions();
  }

  _prototypeProperties(NavBar, {
    inject: {
      value: function inject() {
        return [EventAggregator];
      },
      writable: true,
      enumerable: true,
      configurable: true
    },
    metadata: {
      value: function metadata() {
        return Behavior.withProperty("router");
      },
      writable: true,
      enumerable: true,
      configurable: true
    }
  }, {
    wireupSubscriptions: {
      value: function wireupSubscriptions() {
        var _this = this;
        this.eventAggregator.subscribe("movieFavorited", function (movieFavObj) {
          if (movieFavObj.fav) {
            _this.movieFavoriteCount++;
          } else {
            _this.movieFavoriteCount--;
          }


          console.log(movieFavObj.movie);
        });
      },
      writable: true,
      enumerable: true,
      configurable: true
    }
  });

  return NavBar;
})();

exports.NavBar = NavBar;