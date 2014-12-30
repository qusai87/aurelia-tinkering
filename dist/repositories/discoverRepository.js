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

DiscoverRepository.prototype.getPopularMovies = function (count) {
  if (count === undefined) count = 20;


  if (!this.apiKey) {
    return;
  }

  var url = "" + this.settings.baseUrl + "/discover/movie?sort_by=popularity.desc&api_key=" + this.apiKey;

  return this.httpClient.get(url).then(function (x) {
    var results = JSON.parse(x.response).results;
    return results.slice(0, count);
  });
};

DiscoverRepository.prototype.getHighestRatedMovies = function (count) {
  if (count === undefined) count = 20;


  if (!this.apiKey) {
    return;
  }

  var url = "" + this.settings.baseUrl + "/discover/movie?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=" + this.apiKey;

  return this.httpClient.get(url).then(function (x) {
    var results = JSON.parse(x.response).results;
    return results.slice(0, count);
  });
};

exports.DiscoverRepository = DiscoverRepository;