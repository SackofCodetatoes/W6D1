const MovingObject = require('./moving_object.js');

console.log("Webpack is working!");

function Asteroid() {
  
}

const moveobj = new MovingObject({pos: [0, 0], vel: [0, 0], radius: 2, color: 'blue'});

const canvasEl = document.getElementById("game-canvas");

const ctx = canvasEl.getContext("2d");

moveobj.draw(ctx);

window.MovingObject = MovingObject;
module.exports = Asteroid;