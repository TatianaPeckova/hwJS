let x = 6;
if (typeof x === "number" && x !== 1) {
  console.log("x-number");
} else if (typeof x === "string") {
  console.log("x-string");
} else if (x === 1 || x === 0) {
  console.log("x-boolean");
} else {
  console.log("x type is not defined");
}
