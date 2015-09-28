function Airport(capacity) {
  this.capacity = capacity || 10;
  this.hanger = [];
};



Airport.prototype.land = function(plane) {
  this.hanger.push(plane);
  plane.isFlying = false;
<<<<<<< HEAD
=======
};

Airport.prototype.take_off = function(plane) {
  var index = this.hanger.indexOf(plane);
  this.hanger.splice(index, 1);

  plane.isFlying = true;
>>>>>>> 02e6608f502c746a28b9c8b6fc424812ceacdd8a
};
