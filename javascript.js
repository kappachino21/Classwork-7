let arr1 = ["a", "b", "c"];
let arr2 = ["d", "e", "f"];
const arr3 = [...arr1, ...arr2];

console.log(arr3);

let food = ["apple", "carrot", "chicken", "beef"];
const [fruit, vegetable, ...meat] = food;

console.log(fruit);
console.log(vegetable);
console.log(meat);

function getPerson(name, age, height) {
  return {
    name,
    age,
    height,
  };
}

const menu = ["hamburger", "fish and chips", "cottage pie"];
const obj = {};

for (let i = 0; i < menu.length; i++) {
  obj[`menuItem_${i + 1}`] = menu[i];
}

console.log(obj);

const names = ["Bob", "Tim", "Terry", "George", "Bob", "Terry"];

const uniqueNames = new Set(names);

console.log(uniqueNames);

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 2000);
});

promise
  .then(() => {
    console.log("The promise was resolved");
  })
  .catch((error) => {
    console.log("The promise was rejected");
  });

const thePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("It worked");
  }, 3000);
});

const demo = async () => {
  const result = await thePromise;
  console.log(result);
};

demo();
