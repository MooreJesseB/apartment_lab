var expect = require("chai").expect,
  Unit = require("../src/unit");

describe("Unit", function(){
  newUnit = new Unit(5, null, 500, 800.00);
  it("should make a new unit with a number", function() {
    expect(newUnit.number).to.eql(5);
  });
  it("should make a new unit with null default building", function() {
    expect(newUnit.building).to.eql(null);
  });
  it("should make a new unit with square feet", function() {
    expect(newUnit.sqft).to.eql(500);
  });
  it("should make a new unit with a rent value", function() {
    expect(newUnit.rent).to.eql(800.00);
  });
});