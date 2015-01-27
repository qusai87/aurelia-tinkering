"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var HttpClient = require("aurelia-http-client").HttpClient;
var Settings = require("../settings").Settings;
var MovieRepository = (function () {
  function MovieRepository(httpClient, settings) {
    this.httpClient = httpClient;
    this.settings = settings;
    this.apiKey = localStorage.getItem("apiKey");
  }

  _prototypeProperties(MovieRepository, {
    inject: {
      value: function inject() {
        return [HttpClient, Settings];
      },
      writable: true,
      enumerable: true,
      configurable: true
    }
  }, {
    getById: {
      value: function getById(id) {
        var url = "" + this.settings.baseUrl + "/movie/" + id + "?api_key=" + this.apiKey;

        return this.httpClient.get(url).then(function (response) {
          return response.content;
        });
      },
      writable: true,
      enumerable: true,
      configurable: true
    }
  });

  return MovieRepository;
})();

exports.MovieRepository = MovieRepository;