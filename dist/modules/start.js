"use strict";

var DiscoverRepository = require("../repositories/discoverRepository").DiscoverRepository;
var Start = function Start(discoverRepository) {
  this.popularMovies = [];
  this.highestRatedMovies = [];
  this.apiKey = "";
  this.discoverRepository = discoverRepository;
};

Start.inject = function () {
  return [DiscoverRepository];
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
  this.discoverRepository.getPopularMovies().then(function (movies) {
    return _this.popularMovies = movies;
  });
};

Start.prototype.loadHighestRatedMovies = function () {
  var _this2 = this;
  this.discoverRepository.getHighestRatedMovies().then(function (movies) {
    return _this2.highestRatedMovies = movies;
  });
};

exports.Start = Start;