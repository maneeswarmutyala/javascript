function cartesianProduct() {
  let set = [1, 2];
  let set2 = [3, 4, 5];
  let product = [];
  for (let i = 0; i < set.length; i++) {
    for (let j = 0; j < set2.length; j++) {
      product.push([set[i], set2[j]]);
    }
  }
  return product;
}
console.log(cartesianProduct(), "cartesianProduct"); //o(mn)

function climbingStairCase(n) {
  const noOfWays = [1, 2];
  for (let i = 2; i <= n; i++) {
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
  }
  return noOfWays[n - 1];
}
console.log(climbingStairCase(5), "climbingStairCase"); //o(n)

function towerOfHanoi(n, fromRod, toRod, usingRod) {
  if (n == 1) {
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
    return;
  }
  towerOfHanoi(n - 1, fromRod, usingRod, toRod);
  console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
  towerOfHanoi(n - 1, usingRod, toRod, fromRod);
  console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);

}
console.log(towerOfHanoi(3, "A", "C", "B"), "towerOfHanoi"); //o(2^n)
