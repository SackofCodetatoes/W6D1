// (1) Sum

function sum1() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

function sum2(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}

// console.log(sum2(1, 2, 3, 4));
// console.log(sum2(1, 2, 3, 4, 5));

// (2) Bind

class Cat {
  constructor(name) {
    this.name = name;
  }
}
function says(sound, person) {
  console.log(`${this.name} says ${sound} to ${person}!`);
  return true;
}
const markov = new Cat("Markov");
const nanners = new Cat("Nanners");
const breakfast = new Cat("Breakfast");

Function.prototype.myBind1 = function() {
  const array = Array.from(arguments);
  return (...callArgs) => {
    this.call(...array.concat(callArgs));
  };
};

Function.prototype.myBind2 = function(...bindArgs) {
  return (...callArgs) => {
    this.call(...bindArgs.concat(callArgs));
  };
};

says("meow", "Ned");
says.myBind1(breakfast, "meow", "Kush")();
says.myBind1(nanners)("meow", "a tree");
says.myBind1(breakfast, "meow")("Markov");
const notMarkovSays1 = says.myBind1(breakfast);
notMarkovSays1("meow", "me");

says("meow", "Ned");
says.myBind2(breakfast, "meow", "Kush")();
says.myBind2(nanners)("meow", "a tree");
says.myBind2(breakfast, "meow")("Markov");
const notMarkovSays2 = says.myBind2(breakfast);
notMarkovSays2("meow", "me");


// (3) Curry

// write a function that accepts a function as an argument and returns a new function

function curriedSum(numArgs){
  const numbers = [];

  const _curriedSum = function(arg){
    numbers.push(arg);
    if(numbers.length === numArgs){
      return numbers.reduce( (accum, el) => accum + el);
    }
    return _curriedSum;
  };

  return _curriedSum;
}

const sum = curriedSum(4);
console.log(sum(5)(30)(20)(1)); // => 56


function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

Function.prototype.curry = function (numArgs){
  const numbers = [];
  const func = this;

  const curryMeUp = function(arg){
    numbers.push(arg);
    if(numbers.length === numArgs){
      return func.apply(null, numbers);
    }
    return curryMeUp;
  };

  return curryMeUp;
};

console.log(sumThree.curry(3)(4)(20)(6)); // == 30