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
    // by reference, point to same memory address as this
    var self = this;
    self.name = "updated c obj";
    console.log(self);

    var setName = function(newName) {
      // points to global object!
      // even though sitting inside obj
      self.name = newName;
    };
    // expect to see updated again. but not the case!
    setName("updated the c object again!");
    console.log(self);
  }
};

// invoke method attached to c
c.log();
