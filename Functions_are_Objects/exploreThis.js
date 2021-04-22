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
