// by value (primitives)
var a = 3;
var b;
// copies in two different spots in memory
b = a;
a = 2;
console.log(`a: ${a}\nb: ${b}`);

// by reference -- all obj, including functions

var c = { greeting: "hi" };
var d;

// pointing at same memory address
d = c;
c.greeting = "oh, hello";
// see "oh hello" for both
console.log(`c: ${c.greeting}\nd: ${d.greeting}`);

// by reference -- even as parameters, changes for all
function changeGreeting(obj) {
  obj.greeting = "Hola";
}

changeGreeting(d);
console.log(`c: ${c.greeting}\nd: ${d.greeting}`);

// equals operator sets up new memory space -- a new address for the new object
// creates a spot for new obj and c points to that
c = { greeting: "howdy" };
// d and c no longer pointing at same memory location
console.log(`c: ${c.greeting}\nd: ${d.greeting}`);
