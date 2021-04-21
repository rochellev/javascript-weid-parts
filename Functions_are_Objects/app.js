// functions are objects
// sits in memory
function greet() {
  console.log("hi");
}

// in memory
greet.language = "english";

console.log(greet);
console.log(greet.language);

// function object{ name: greet, code: console.log())}


