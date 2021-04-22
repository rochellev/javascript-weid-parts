// by value (primitives)
var a = 3;
var b;
// copies in two different spots in memory
b = a;
a = 2;
console.log(`a: ${a}   b: ${b}`);

// by reference -- all obj, including functions

var c = { greeting: "hi" };
var d;

// pointing at same memory address
d = c;
c.greeting = "oh, hello";
console.log(`c: ${c.greeting}   d: ${d.greeting}`);

// see "oh hello" for both
