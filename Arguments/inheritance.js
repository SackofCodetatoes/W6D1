Function.prototype.inherits = function(parentClass) {
  function Surrogate() {}
  Surrogate.prototype = parentClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

function Ship() {}
function Asteroid() {}
function MovingObject () {}

Ship.inherits(MovingObject);
Asteroid.inherits(MovingObject);

MovingObject.prototype.print = function() {
  console.log('hello');
};

Asteroid.prototype.destroyShip = function() {
  console.log('Hate ships');
};

const ship = new Ship();
const aste = new Asteroid();
const move = new MovingObject();
console.log(Ship.prototype);
console.log(Asteroid.prototype);
console.log(MovingObject.prototype);
console.log();
console.log(ship.constructor.name);
console.log(aste.constructor.name);
console.log(move.constructor.name);
console.log();
console.log(ship instanceof MovingObject);
console.log(aste instanceof MovingObject);
console.log(move instanceof MovingObject);
console.log();
console.log(ship instanceof Ship);
console.log(aste instanceof Asteroid);
console.log(move instanceof MovingObject);
console.log();
console.log(typeof ship);
console.log(typeof aste);
console.log(typeof move);
console.log();
console.log(Ship.prototype instanceof MovingObject);
console.log(Asteroid.prototype instanceof MovingObject);
console.log(MovingObject.prototype instanceof MovingObject);








Function.prototype.inherits2 = function inherits2(BaseClass) {
  this.prototype = Object.create(BaseClass.prototype);
  this.prototype.constructor = this;
};

function Ship2() {}
function Asteroid2() {}
function MovingObject2 () {}

Ship2.inherits2(MovingObject2);
Asteroid2.inherits2(MovingObject2);

MovingObject2.prototype.print = function() {
  console.log('hello');
};

Asteroid2.prototype.destroyShip = function() {
  console.log('Hate ships');
};

const ship2 = new Ship2();
const aste2 = new Asteroid2();
const move2 = new MovingObject2();

console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log(Ship2.prototype);
console.log(Asteroid2.prototype);
console.log(MovingObject2.prototype);
console.log();
console.log(ship2.constructor.name);
console.log(aste2.constructor.name);
console.log(move2.constructor.name);
console.log();
console.log(ship2 instanceof MovingObject2);
console.log(aste2 instanceof MovingObject2);
console.log(move2 instanceof MovingObject2);
console.log();
console.log(ship2 instanceof Ship2);
console.log(aste2 instanceof Asteroid2);
console.log(move2 instanceof MovingObject2);
console.log();
console.log(typeof ship2);
console.log(typeof aste2);
console.log(typeof move2);
console.log();
console.log(Ship2.prototype instanceof MovingObject2);
console.log(Asteroid2.prototype instanceof MovingObject2);
console.log(MovingObject2.prototype instanceof MovingObject2);