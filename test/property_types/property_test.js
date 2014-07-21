var expect = require("chai").expect,
  Property = require("../../src/property_types/property.js"),
  Manager = require("../../src/people/manager"),
  Person = require("../../src/people/person"),
  Tenant = require("../../src/people/tenant"),
  Unit = require("../../src/unit");

describe("Property", function(){
  newProperty = new Property("1444 banana road");
  it("it should create a new Property and have an address", function() {
    expect(newProperty.address).to.eql("1444 banana road");
  });
  describe("#setManager", function() {
    newManager = new Manager("Banana", "555-2345");
    newProperty.setManager(newManager);
    it("should set a new Manager with the function", function() {
      expect(newProperty.manager.name).to.eql("Banana");
    });
  });
  describe("#getManager", function() {
    newManager = newProperty.getManager();
    it("should return the manager of the property", function() {
      expect(newManager.name).to.eql("Banana");
    });
  });
  newTenant = new Tenant("mango", "345-6999");
  newPerson = new Person("grape", "233-4332");
  newTenant.addReference(newPerson);
  newPerson = new Person("orange", "345-3453");
  newTenant.addReference(newPerson);
  newUnit = new Unit(5, null, 500, 800.00);
  newProperty.addTenant(newUnit, newTenant);
  describe("#addTenant", function() {
    it("should set a new Tenant to the array", function() {
      expect(newProperty.tenants.length).to.eql(1);
      // expect(newProperty.tenants[0].name).to.eql("mango");
    });
  });
  describe("#removeTenant", function() {
    // newProperty.removeTenant(newUnit, newTenant);
    // it("should remove a tenant", function() {
      // expect(newProperty.tenants.length).to.equal(0);
    // });
  });
  describe("#addUnit", function() {
    newProperty.units = [];
    newUnit = new Unit(5, null, 500, 800.00);
    newProperty.maxUnits = 2;
    newProperty.addUnit(newUnit);
    it("should add a unit to the array", function() {
      expect(newProperty.units[0]).to.eql(newUnit);
    });
  });
});















