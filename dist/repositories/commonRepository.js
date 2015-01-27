"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var HttpClient = require("aurelia-http-client").HttpClient;
var Settings = require("../settings").Settings;
var CommonRepository = (function () {
  function CommonRepository(httpClient, settings) {
    this.httpClient = httpClient;
    this.settings = settings;
    this.apiKey = localStorage.getItem("apiKey");
  }

  _prototypeProperties(CommonRepository, {
    inject: {
      value: function inject() {
        return [HttpClient, Settings];
      },
      writable: true,
      enumerable: true,
      configurable: true
    }
  }, {
    getGenres: {
      value: function getGenres() {
        var url = "" + this.settings.baseUrl + "/genre/movie/list?api_key=" + this.apiKey;
        return this.httpClient.get(url).then(function (response) {
          return response.content;
        });
      },
      writable: true,
      enumerable: true,
      configurable: true
    },
    getMoviesByGenre: {
      value: function getMoviesByGenre(id) {
        var url = "" + this.settings.baseUrl + "/genre/" + id + "/movies?api_key=" + this.apiKey;
        return this.httpClient.get(url).then(function (response) {
          return response.content;
        });
      },
      writable: true,
      enumerable: true,
      configurable: true
    }
  });

  return CommonRepository;
})();

exports.CommonRepository = CommonRepository;