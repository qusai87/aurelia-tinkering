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
    search: {
      value: function search() {
        if (this.searchText) {
          this.eventAggregator.publish("movieSearchEvent", this.searchText);
        }
      },
      writable: true,
      enumerable: true,
      configurable: true
    }
  });

  return NavBar;
})();

exports.NavBar = NavBar;