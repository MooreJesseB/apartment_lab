function Property(address) {
  this.address = address;
  this.units = [];
  this.tenants = [];
  this.manager = null;
}

Property.prototype.setManager = function(person) {
  // set this.manager to person
  this.manager = person;
  person.properties.push(this);
  person
};

Property.prototype.getManager = function(){
  // return this.manager
  return this.manager; 
};

Property.prototype.addTenant = function(unit, tenant) {
  // add tenant but check to make sure there
  // is a manager first and a tenant has 2 references
  if (this.manager !== null && tenant.references.length >= 2) {
    unit.tenant = tenant;
    this.tenants.push(tenant);
  }
};

Property.prototype.removeTenant = function(unit, tenant) {
  // remove tenant
  for (var i = 0; i < this.tenants.length; i++) {
    if (this.tenants[i] === tenant && unit.tenant === tenant) {
      unit.tenant = null;
      this.tenants.splice(i, 1);
    }
  };
};

Property.prototype.availableUnits = function(){
  // return num of units available
  var units = [];
  for (var i = 0; i < this.units.length; i++) {
    if (this.units[i].available === true) {
      units.push(this.units[i]);
    }
  };
  return units;
};

Property.prototype.rentedUnits = function(){
  units = [];
  // return rented units
  for (var i = 0; i < this.units.length; i++) {
    if (this.units[i].available === null) {
      units.push(this.units[i]);
    }
  };
  return units;
};

Property.prototype.addUnit = function(unit) {
  if (this.maxUnits > this.units.length) {
    this.units.push(unit);
    unit.building = this;
    return true;
  }
  else {
    return false;
  } 
};


module.exports = Property;
