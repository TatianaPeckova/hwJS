const n = prompt("Enter number");
console.log(typeof n);
if (n === NaN) {
  +n;
} else if (n % 2 === 0) {
  alert("Number " + n + " is Even!");
} else {
  alert("Number " + n + " is Odd!");
}
