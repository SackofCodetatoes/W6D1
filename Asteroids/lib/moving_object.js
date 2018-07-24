const Utils = require('./util.js');

function MovingObject(options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
}

MovingObject.prototype.draw = function(ctx) {
  // ctx.fillStyle = "purple";
  // ctx.fillRect(0, 0, 500, 500);
  ctx.beginPath();
  ctx.arc(100, 100, 20, 0, 2 * Math.PI, true);
  ctx.strokeStyle = "green";
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.fillStyle = this.color;
  ctx.fill();
};



module.exports = MovingObject;