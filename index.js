let person = {
  fname: "maneesh",
  lname: "maneesh",
};
person.age = 20; //o(1)
delete person.lname; //o(1)
console.log(person.fname); //o(1)
console.log(Object.keys(person)); // o(n)
console.log(Object.values(person)); // o(n)
console.log(Object.entries(person)); // o(n)

let num = [1, 2, 3, 4, 5];
num.push(4);
console.log(num); //o(1)
num.pop();
console.log(num); //o(1)
num.unshift(0);
console.log(num); //o(n)
num.shift();
console.log(num); //o(n)
console.log(num[4]); //o(1)
console.log(num.concat([1, 2, 3])); // o(n
console.log(num.slice(0, 5)); //o(n)
console.log(num.splice(0, 3)); //o(n)

//fibonacci seq
function fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}
function recFibonacci(n) {
  if (n < 2) {
    return n;
  }
  return recFibonacci(n - 1) + recFibonacci(n - 2);
}
console.log(fibonacci(7),"fibonacci"); // o(n)
console.log(recFibonacci(6),"recFibonacci"); // o(2^n)

//factorial seq
function factorial(n) {
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact *= i;
  }
  return fact;
}
console.log(factorial(5)); // o(n)

//isPrime
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(5)); // o(sqrt(n))

//isPowerOfTwo
function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}
function isPowerOfTwoBitWise(n) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}
console.log(isPowerOfTwo(5)); // o(logn)
console.log(isPowerOfTwoBitWise(5)); // o(1)
