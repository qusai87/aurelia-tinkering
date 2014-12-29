"use strict";

var HttpClient = require("http-client").HttpClient;
var AppConfig = require("../app-config").AppConfig;
var Start = function Start(httpClient, appConfig) {
  this.popularMovies = [];
  this.highestRatedMovies = [];
  this.httpClient = httpClient;
  this.apiKey = "";
  this.config = appConfig;
};

Start.inject = function () {
  return [HttpClient, AppConfig];
};

Start.prototype.activate = function () {
  this.apiKey = localStorage.getItem("apiKey");
  this.loadPopularMovies();
  this.loadHighestRatedMovies();
};

Start.prototype.saveApiKey = function () {
  localStorage.setItem("apiKey", this.apiKey);
  this.activate();
};

Start.prototype.loadPopularMovies = function () {
  var _this = this;
  var url = "" + this.config.baseUrl + "/discover/movie?sort_by=popularity.desc&api_key=" + this.apiKey;

  if (!this.apiKey) {
    return;
  }

  this.httpClient.get(url).then(function (x) {
    var response = JSON.parse(x.response);
    _this.popularMovies = response.results;
  });
};

Start.prototype.loadHighestRatedMovies = function () {
  var _this2 = this;
  var url = "" + this.config.baseUrl + "/discover/movie?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=" + this.apiKey;

  if (!this.apiKey) {
    return;
  }

  this.httpClient.get(url).then(function (x) {
    var response = JSON.parse(x.response);
    _this2.highestRatedMovies = response.results;
  });
};

exports.Start = Start;