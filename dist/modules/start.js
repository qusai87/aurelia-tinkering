"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var DiscoverRepository = require("../repositories/discoverRepository").DiscoverRepository;
var EventAggregator = require("aurelia-event-aggregator").EventAggregator;
var Start = (function () {
  function Start(discoverRepository, eventAggregator) {
    this.popularMovies = [];
    this.highestRatedMovies = [];
    this.apiKey = "";
    this.discoverRepository = discoverRepository;
    this.count = 10;
    this.eventAggregator = eventAggregator;
    this.popularMoviesTitle = "Top " + this.count + " most popular movies";
    this.highestRatedMoviesTitle = "Top " + this.count + " highest rated movies";
  }

  _prototypeProperties(Start, {
    inject: {
      value: function inject() {
        return [DiscoverRepository, EventAggregator];
      },
      writable: true,
      enumerable: true,
      configurable: true
    }
  }, {
    activate: {
      value: function activate() {
        this.apiKey = localStorage.getItem("apiKey");
        this.loadPopularMovies();
        this.loadHighestRatedMovies();
        this.subscribe();
      },
      writable: true,
      enumerable: true,
      configurable: true
    },
    saveApiKey: {
      value: function saveApiKey() {
        localStorage.setItem("apiKey", this.apiKey);
        this.activate();
      },
      writable: true,
      enumerable: true,
      configurable: true
    },
    loadPopularMovies: {
      value: function loadPopularMovies() {
        var _this = this;
        if (!this.apiKey) {
          return;
        }
        this.discoverRepository.getPopularMovies(this.count).then(function (movies) {
          return _this.popularMovies = movies;
        });
      },
      writable: true,
      enumerable: true,
      configurable: true
    },
    loadHighestRatedMovies: {
      value: function loadHighestRatedMovies() {
        var _this2 = this;
        if (!this.apiKey) {
          return;
        }
        this.discoverRepository.getHighestRatedMovies(this.count).then(function (movies) {
          return _this2.highestRatedMovies = movies;
        });
      },
      writable: true,
      enumerable: true,
      configurable: true
    },
    subscribe: {
      value: function subscribe() {
        this.eventAggregator.subscribe("movieSearchEvent", function (searchText) {
          console.log(searchText);
        });
      },
      writable: true,
      enumerable: true,
      configurable: true
    }
  });

  return Start;
})();

exports.Start = Start;