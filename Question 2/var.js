var x = "outside";
function foo() {
  var x = "inside";
  console.log(x);
}
foo(); // inside
console.log(x); // outside