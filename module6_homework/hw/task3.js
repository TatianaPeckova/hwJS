function outerFunction(num1) {
  return function (num2) {
    return num1 + num2;
  };
}
console.log(outerFunction(10)(9));
