// execution context:
// (1) phase 1 : allocate memory
// (2) phase 2 : execute
// each get a global object, 'this' and reference to outside environment

function b() {
  // will use reference to outside environment
  // which is global context
  console.log(myVar);
  // prints 1
}
function a() {
  var myVar = 2;
  b();
}
var myVar = 1;
a();

// b();
// var a = "hello";
// console.log(a);

// if (a === undefined) {
//   console.log("a is undefined!");
// } else {
//   console.log("a is defined!");
// }

// function b() {
//   console.log("called b! boi");
// }
