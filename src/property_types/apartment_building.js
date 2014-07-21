var App = require("../main.js");

function ApartmentBuilding(name, address) {
  // A building can have many many units 
  App.Property.call(this, address);
  this.maxUnits = 100;
  this.units = [];
  this.tenants = [];
  this.manager = null;
}

module.exports = ApartmentBuilding;