describe("Airport", function() {
  var airport;
  var default_capacity = 10;

  beforeEach(function() {
    airport = new Airport();
  });

  it("should have a capacity", function() {
    expect(plane.capacity).toEqual(default_capacity);
  });

});
