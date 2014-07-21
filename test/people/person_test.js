var expect = require("chai").expect,
  Person = require("../../src/people/person");

describe("Person", function() {
  var newPerson = new Person("banana", "272-9999");
  it('should make a new person and have a new name', function() {
    expect(newPerson.name).to.eql("banana");
  });
  it('should make a new person and have a phone number', function() {
    expect(newPerson.contact).to.eql("272-9999");
  });
});