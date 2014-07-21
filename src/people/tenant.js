var Person = require('./person'),
inherits = require('../inherits');

function Tenant(name, contact) {
  // set this.name, and contact
  Person.call(this, name, contact);
  this.references = [];
};

inherits(Tenant, Person);

Tenant.prototype.addReference = function(reference){
  // add reference to references
  for (var i = 0; i < this.references.length; i++) {
    if (this.references[i] === reference) {
      return false;
    }
  };
  this.references.push(reference);
  return true;
};

module.exports = Tenant;
