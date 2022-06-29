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
  console.log(fibonacci(7), "fibonacci"); // o(n)
  console.log(recFibonacci(6), "recFibonacci"); // o(2^n)
  
  //factorial seq
  function factorial(n) {
    let fact = 1;
    for (let i = 2; i <= n; i++) {
      fact *= i;
    }
    return fact;
  }
  function recFactorial(n) {
    if (n === 0) {
      return 1;
    }
    return n * recFactorial(n - 1);
  }
  console.log(factorial(5), "factorial"); // o(n)
  console.log(recFactorial(5), "recFactorial"); // o(n)
  
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