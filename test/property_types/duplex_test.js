var expect = require("chai").expect,
  Unit = require("../../src/unit"),
  Duplex = require("../../src/property_types/duplex");

describe("#Duplex", function() {
  newDuplex = new Duplex("1444 Banana Street");
  it ("can call address to Property", function() {
    expect(newDuplex.address).to.equal("1444 Banana Street");
  });
  newUnit = new Unit(5, null, 500, 800.00);
  newDuplexaddUnit(newUnit);
  it("can have units added to it", function() {
    // expect(newDuplex.units.length).to.eql(1);
    expect(newDuplex.units[0]).to.eql(newUnit);
  });
});