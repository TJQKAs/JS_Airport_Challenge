function Airport(capacity) {
  this.capacity = capacity || 10;
  this.hanger = [];
};



Airport.prototype.land = function(plane) {
  if (airport2.hanger.length == airport2.capacity) {
    throw "AIRPORT FULL, LANDING IS PROHIBITED"
  }
  else {
    this.hanger.push(plane);
    plane.isFlying = false;
  };
};

Airport.prototype.take_off = function(plane) {
  var index = this.hanger.indexOf(plane);
  this.hanger.splice(index, 1);

  plane.isFlying = true;
};
