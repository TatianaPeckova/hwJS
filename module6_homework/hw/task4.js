function countNumbers(num1, num2) {
  let firstNum = num1;
  const intervalId = setInterval(function () {
    console.log(firstNum);
    if (firstNum === num2) {
      clearInterval(intervalId);
    }

    firstNum++;
  }, 1000);
}

countNumbers(5, 15);
