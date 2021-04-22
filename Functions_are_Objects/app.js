// functions are objects
// sits in memory
greet();
// function statement -- object in memory
function greet() {
  console.log("hi");
}
// uncaught typeError: anonymousGreet not a function
// all variables set to undefined 
anonymousGreet();

// function expression -- returns an function object
// setting variable to contain a function object, ref address in memory
var anonymousGreet = function() {
  console.log("hi");
};


// function object{ name: greet, code: console.log())}
