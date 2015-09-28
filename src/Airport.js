function Airport(capacity) {
  this.capacity = capacity || 10;
  this.hanger = [];
};



Airport.prototype.land = function(plane) {
  this.hanger.push(plane);
  plane.isFlying = false;
};
