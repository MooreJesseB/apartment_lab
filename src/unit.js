function Unit (number, building, sqft, rent) {
  // set params above using this
  this.number = number;
  this.tenant = null;
  this.building = building;
  this.sqft = sqft;
  this.rent = rent;
}

Unit.prototype.available = function(){
  // check for tenant
  if (this.tenant != null) {
    return false;
  }
  else {
    return true;
  }
};

module.exports = Unit;

