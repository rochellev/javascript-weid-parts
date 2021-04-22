// functions are objects
// sits in memory
greet();
// function statement -- object in memory
function greet() {
  console.log("greet hi");
}
// uncaught typeError: anonymousGreet not a function, undefined not a function
// all variables set to undefined
// anonymousGreet();

// function expression -- returns an function object
// setting variable to contain a function object, ref address in memory
var anonymousGreet = function() {
  console.log("hi");
};
// can only call after code starts to run
anonymousGreet();
// function statement
function log(a) {
  // invoke the function object
  a();
}

// log({ greeting: "hi" });

// log(3);

// function expression -- available bc first class functions
log(function() {
  console.log("function on the fly");
});

// function object{ name: greet, code: console.log())}

// first class function: pass function to function --> functional programming