describe("Airport", function() {
  var airport;

  beforeEach(function() {
    plane1 = new Plane();
    plane2 = new Plane();
    plane3 = new Plane();
    airport = new Airport();
    airport2 = new Airport(2);

  });

  it("should have a capacity", function() {
    expect(airport.capacity).toEqual(10);
    console.log(airport);
  });

  it("should have an array called hanger to store plane objects", function() {
    expect(airport.hanger).toEqual([]);
    console.log(airport);
  });


  it("should be able to instruct a plane to land", function() {
    airport.land(plane1);
    expect(airport.hanger).toEqual([plane1]);
    expect(plane1.isFlying).toEqual(false);
    console.log(airport);
  });

  it("should be able to instruct a plane to take off", function() {
    airport.land(plane1);
    airport.take_off(plane1);
    expect(airport.hanger).toEqual([]);
    expect(plane1.isFlying).toEqual(true);
    console.log(airport);
  });


  it("should forbid a plane to land if the airport is full", function() {
    airport2.land(plane1);
    airport2.land(plane2);
    expect(function(){airport2.land(plane3);}).toThrowError("AIRPORT FULL, LANDING IS PROHIBITED");
    console.log(airport2);
  });

  it("cannot releases an airplane in case the hanger is empty", function() {
  expect(function(){airport.take_off(plane1);}).toThrowError("THERE IS NO AIRCRAFT IN THE HANGER")

  });

  // it ("cannot allows to planes landing in the stormy weather", function(){
  //    airport.weather(weather);
  //    expect(function(){airport.land(plane1);}).toThrowError("THE LANDING IS PROHIBITED CAUSE OF THE STORMY WEATHER")
  // });


  // it("cannot releases airplanes in case the weather is stormy", function() {
  //    airport.weather() === true;
  //    airport.land(plane1);
  //    expect(function(){airport.take_off(plane1);}).toThrowError("THE TAKE OFF IS PROHIBITED CAUSE OF THE STORMY WEATHER")
  //
  //
  // });
});
