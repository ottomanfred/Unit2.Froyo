let froyoOrder = prompt("Please input a comma-separated froyo order: ");

console.log(
  `Your froyo order is ${froyoOrder}. But let's organize that for you...`
);

let orderArray = froyoOrder.split(",");

console.log("We've turned your order into an array:");
console.log(orderArray);

console.log("But we can do better...");

function buildObject(arr) {
  let newObject = {};
  for (const elem of arr) {
    if (elem in newObject) {
      newObject[elem] += 1;
    } else {
      newObject[elem] = 1;
    }
  }
  return newObject;
}

let orderObject = buildObject(orderArray);

console.log("Here is a nice table of your order:");
console.table(orderObject);
