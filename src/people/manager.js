var Person = require('./person');
var inherits = require('../inherits');

function Manager(name, contact) {
  // set name and contact
  Person.call(this, name, contact);
  // this.name = name;
  // this.contact = contact;  
  this.properties = [];
}

inherits(Manager, Person);

Manager.prototype.addProperty = function(property) {
  // add property from properties
  this.properties.push(property);
  property.manager = this;
};

Manager.prototype.removeProperty = function(property) {
  // remove properties
  for (var i = 0; i < this.properties.length; i++) {
    if (this.properties[i] === property) {
      this.properties.splice(i, 1);
      break;
    }
  };
};

module.exports = Manager;