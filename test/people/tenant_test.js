var expect = require("chai").expect,
  Tenant = require("../../src/people/tenant");
  Person = require("../../src/people/person")

describe("Manager", function() {
  newTenant = new Tenant('apple', "555-3452");
  it("should make a new Tenant with a name", function() {
    expect(newTenant.name).to.eql("apple");
  });
  it("should make a new Tenant with a phone number", function() {
    expect(newTenant.contact).to.eql("555-3452");
  });
  newPerson = new Person("guava", "555-5555");
  newTenant.addReference(newPerson);
  it("should add a new person reference", function() {
    expect(newTenant.references[0].name).to.eql("guava");
  });
});