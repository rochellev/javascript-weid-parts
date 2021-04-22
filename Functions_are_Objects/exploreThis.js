function a() {
  console.log(this);
  // attach variable to global obj
  this.newVariable = "hello";
}

var b = function() {
  console.log(this);
};

// 'this' points to global object
// function statement or expression
a();
console.log(newVariable);
b();

// true evel though 3 execution contexts: global, a invoke and b invoke
// this is still same location in memory

// 'this' attached to obj that holds the function
// access other properties and methods inside
var c = {
  name: "the c object",
  log: function() {
    this.name = "updated c obj";
    console.log(this);
  }
};

// invoke method attached to c
c.log();
