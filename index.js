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
