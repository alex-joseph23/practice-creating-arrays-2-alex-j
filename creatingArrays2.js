let greetings = Array(7).fill("Hello");
console.log(greetings);

greetings.fill("Hi", 1, 4);
console.log(greetings);

let numArray = Array(5);
for (let i = 0; i < numArray.length; i++) {
  numArray[i] = i * 10;
}

console.log(numArray);
