var expect = require("chai").expect,
  Manager = require("../../src/people/manager");

describe("Manager", function() {
  newManager = new Manager('apple', "555-3452")
  it("should default to no properties", function() {
    expect(newManager.properties.length).to.eql(0);
  });
  it("should make a new manager with a name", function() {
    expect(newManager.name).to.eql("apple");
  });
  it("should make a new manager with a phone number", function() {
    expect(newManager.contact).to.eql("555-3452");
  });
});