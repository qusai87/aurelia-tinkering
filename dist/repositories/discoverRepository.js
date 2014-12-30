"use strict";

var HttpClient = require("http-client").HttpClient;
var Settings = require("../settings").Settings;
var DiscoverRepository = function DiscoverRepository(httpClient, settings) {
  this.httpClient = httpClient;
  this.settings = settings;
  this.apiKey = localStorage.getItem("apiKey");
};

DiscoverRepository.inject = function () {
  return [HttpClient, Settings];
};

DiscoverRepository.prototype.getPopularMovies = function () {
  if (!this.apiKey) {
    return;
  }

  var url = "" + this.settings.baseUrl + "/discover/movie?sort_by=popularity.desc&api_key=" + this.apiKey;

  return this.httpClient.get(url).then(function (x) {
    return JSON.parse(x.response).results;
  });
};

DiscoverRepository.prototype.getHighestRatedMovies = function () {
  if (!this.apiKey) {
    return;
  }

  var url = "" + this.settings.baseUrl + "/discover/movie?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=" + this.apiKey;

  return this.httpClient.get(url).then(function (x) {
    return JSON.parse(x.response).results;
  });
};

exports.DiscoverRepository = DiscoverRepository;