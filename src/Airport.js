function Airport(capacity) {
  this.capacity = capacity || 10;
  this.hanger = [];
};


Airport.prototype.land = function(plane) {
  // this.hanger.push(plane);
  // plane.isFlying = false;

  if (this.hanger.length == this.capacity) {
    throw new Error ("AIRPORT FULL, LANDING IS PROHIBITED")
  }
  else if (this.weather == true){
    throw new Error ("THE LANDING IS PROHIBITED CAUSE OF THE STORMY WEATHER")
  }
  else {
    this.hanger.push(plane);
    plane.isFlying = false;
  };
};


Airport.prototype.take_off = function(plane) {
  if (this.hanger.length == 0) {
  throw new Error ("THERE IS NO AIRCRAFT IN THE HANGER")
}
  else {
  var index = this.hanger.indexOf(plane);
    this.hanger.splice(index, 1);

    plane.isFlying = true;
};

Airport.prototype.weather = function() {

  if (Math.floor(Math.random(10) == 6)) {
    return weather = true;
  }
  return weather = false;
};

};
