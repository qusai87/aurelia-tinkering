"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var HttpClient = require("http-client").HttpClient;
var Settings = require("../settings").Settings;
var DiscoverRepository = (function () {
  function DiscoverRepository(httpClient, settings) {
    this.httpClient = httpClient;
    this.settings = settings;
    this.apiKey = localStorage.getItem("apiKey");
  }

  _prototypeProperties(DiscoverRepository, {
    inject: {
      value: function inject() {
        return [HttpClient, Settings];
      },
      writable: true,
      enumerable: true,
      configurable: true
    }
  }, {
    getPopularMovies: {
      value: function getPopularMovies() {
        var count = arguments[0] === undefined ? 20 : arguments[0];


        var url = "" + this.settings.baseUrl + "/discover/movie?sort_by=popularity.desc&api_key=" + this.apiKey;

        return this.httpClient.get(url).then(function (response) {
          return response.content.results.slice(0, count);
        });
      },
      writable: true,
      enumerable: true,
      configurable: true
    },
    getHighestRatedMovies: {
      value: function getHighestRatedMovies() {
        var count = arguments[0] === undefined ? 20 : arguments[0];


        var url = "" + this.settings.baseUrl + "/discover/movie?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=" + this.apiKey;

        return this.httpClient.get(url).then(function (response) {
          return response.content.results.slice(0, count);
        });
      },
      writable: true,
      enumerable: true,
      configurable: true
    }
  });

  return DiscoverRepository;
})();

exports.DiscoverRepository = DiscoverRepository;