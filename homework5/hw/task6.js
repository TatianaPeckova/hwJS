const randomArray = [1, "hello", 5, 6, 8];

let x;

x = typeof randomArray[0];
if (randomArray.every((element) => typeof element == x)) {
  console.log(true);
} else {
  console.log(false);
}
