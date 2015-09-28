describe("Airport", function() {
  var airport;
  var default_capacity = 10;

  beforeEach(function() {
    plane1 = new Plane();
    airport = new Airport();
    console.log(airport);
  });

  it("should have a capacity", function() {
    expect(airport.capacity).toEqual(default_capacity);
    console.log(airport);
  });

  it("should have an array called hanger to store plane objects", function() {
    expect(airport.hanger).toEqual([]);
    console.log(airport);
  });

  it("should be able to instruct a plane to land", function() {
    airport.land(plane1)
    expect(airport.hanger).toEqual([plane1]);
    console.log(airport);
  });




});
