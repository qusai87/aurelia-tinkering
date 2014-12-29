"use strict";

var HttpClient = require("http-client").HttpClient;
var Start = function Start(httpClient) {
  this.popularMovies = [];
  this.httpClient = httpClient;
  this.apiKey = "";
};

Start.inject = function () {
  return [HttpClient];
};

Start.prototype.activate = function () {
  this.apiKey = localStorage.getItem("apiKey");
  this.loadPopularMovies();
};

Start.prototype.saveApiKey = function () {
  localStorage.setItem("apiKey", this.apiKey);
};

Start.prototype.loadPopularMovies = function () {
  var _this = this;
  var url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=" + this.apiKey;
  this.httpClient.get(url).then(function (x) {
    var response = JSON.parse(x.response);
    _this.popularMovies = response.results;
  });
};

exports.Start = Start;