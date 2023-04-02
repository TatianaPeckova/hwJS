let countEvenNumber = 0;
let countOddNumber = 0;
let countString = 0;
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Hello"];

function countEvenOddNumbers() {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] % 2 == 0 && arr[i] > 0 && typeof arr[i] === "number") {
      countEvenNumber = countEvenNumber + 1;
    } else if (arr[i] % 2 && arr[i] > 0 && typeof arr[i] === "number") {
      countOddNumber = countOddNumber + 1;
    } else if (typeof arr[i] !== "number" && arr[i]) {
      countString = countString + 1;
    }
  }
  console.log(`This array contains  ${countEvenNumber} even numbers`);
  console.log(`This array contains  ${countOddNumber} odd numbers`);
  console.log(`This array contains  ${countString} string`);
  return;
}

countEvenOddNumbers();
