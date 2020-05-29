var petArray = ["cat", "cow", "dog"];

console.log(petArray[1]);

petArray.push("sheep");

console.log(petArray);

console.log(petArray.length);

var catObject = {
  name: "Cosette",
  colour: "white",
  age: 4,
};

console.log(catObject.age);

var catArray = [
  {
    name: "Cosette",
    colour: "white",
    age: 4,
  },
];

console.log(catArray.length);

for (var i = 0; i < catArray.length; i++) {
  console.log(catArray[i]);
}

function logToConsole(greeting) {
  console.log(greeting);
}

logToConsole("hello");

logToConsole("donkey");
