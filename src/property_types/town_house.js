var Property = require("./property"),
  inherits = require("../inherits");

function TownHouse(address){
  // only has one unit per address
  App.Property.call(this, address);
  this.maxUnits = 1;
  this.units = [];
  this.tenants = [];
  this.manager = null;
};

inherits(TownHouse, Property);

TownHouse.prototype.available = function(){
  // a tenant it should not be available
  for (var i = 0; i < this.units.length; i++) {
    if (this.units[i].tenant === null) {
      return true;
    }
  };
  return false;
};

module.exports = TownHouse;
