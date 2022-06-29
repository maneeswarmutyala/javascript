function linearSearch(num) {
  let arr = [-5, 2, 10, 4, 6];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
      return i;
    }
  }
  return -1;
}
console.log(linearSearch(10), "linearSearch"); // o(n)

function binarySearch(num) {
  let arr = [-5, 2, 4, 6, 10];
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (num == arr[middleIndex]) {
      return middleIndex;
    }
    if (num < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}
function recBinarySearch(num) {
  let arr = [-5, 2, 4, 6, 10];
  return search(num, 0, arr.length - 1);
}
function search(num, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (num == arr[middleIndex]) {
    return middleIndex;
  }
  if (num < arr[middleIndex]) {
    return search(num, leftIndex, middleIndex - 1);
  } else {
    leftIndex = middleIndex + 1;
    return search(num, leftIndex, middleIndex + 1);
  }
}
console.log(recBinarySearch(10), "recBinarySearch"); // o(logn)
console.log(binarySearch(10), "binarySearch"); // o(logn)
