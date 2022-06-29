function bubbleSort() {
  let arr = [-6, 20, 8, -2, 4];
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}
console.log(bubbleSort(), "bubbleSort"); // o(n^2)

function insertionSort() {
  let arr = [-6, 20, 8, -2, 4];
  for (let i = 1; i < arr.length; i++) {
    let numToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numToInsert;
  }
  return arr;
}
console.log(insertionSort(), "insertionSort"); // o(n^2)

function quickSort(arr = [-6, 20, 8, -2, 4]) {
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  if (arr.length < 2) {
    return arr;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log(quickSort(), "quickSort");
// worst case o(n^2)
// avg case o(nlogn)

function mergeSort(arr = [-6, 20, 8, -2, 4]) {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(left, right) {
  let sorted = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }
  return [...sorted, ...left, ...right];
}
console.log(mergeSort(), "mergeSort"); // o(nlogn)
