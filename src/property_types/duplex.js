var App = require("../main.js");


function Duplex(address) {
  // A duplex only has 2 units;
  App.Property.call(this, address);
  this.maxUnits = 2;
  this.units = [];
  this.tenants = [];
  this.manager = null;
}

App.inherits(Duplex, App.Property);

module.exports = Duplex;