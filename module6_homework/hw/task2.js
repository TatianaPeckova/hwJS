function isPrimitive(num) {
  if (num > 1000) {
    return "данные неверны!";
    return;
  } else if (num == 0 || num == 1) {
    return "число не является ни простым, ни составным!";
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return "составное число";
    }
  }
  return "простое число";
}

console.log(isPrimitive(1));
