//alert("helo world");
console.log("hello world");
console.error("this is an error");

//let and const are the best ways to declare variableshow ever var was the formal meethod of declaring variables but is no longer in use foloowing the emmergence of es5 in 2015.//
const name = "john"; //string
const age = 30; //number
const rating = 4.5;
const isCool = true; //boolean
const x = null; //null
const y = undefined; //undefined

//however if we initailize a thing with let without anynvariable attached to it its is still an undefined datatype.//

let z;

//to test a type
console.log(typeof x); //this will give you an outcome called aobject on the console//
console.log(typeof y); // this will pop undefined//

//concatenation
console.log("my name is" + name + "and iam" + age); //note thsi si an old way of doing it.

//template string of es6 or es 2015.
console.log(`my name is ${name} and i am ${age}`);

//we can const this as follows'
//const hello = `my name is ${name} and i am ${age}`;

/**STRINGS 
string properties and methods*/

const s = "hello world";
console.log(s.length);
console.log(s.split(""));
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5));

//if we want string of Array vAlue we can use a comma seperator.
const S = "technology, computers, it, codes";
console.log(S.split(","));

/****ARRAYS****     
 ARE BASICALLY VARIABLES THAT HOLDS A MULTIPLE VALUES*/

const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

const fruits = ["apples", "oranges", "pears"];
console.log(fruits);
//note that you can combine data in js and it will still run.

const Fruits = ["apples", "oranges", "pears", 12, 10, true];
// we can add a value to the arrays using a method called push
Fruits.push("mangos");
//to add a value to the begining we use unshift
Fruits.unshift("strayberry");
//IF i want to pop something/last fruit(out)or up ,we use .pop
Fruits.pop();
//to check if something is in the array we can pass a condition by
console.log(Array.isArray("hello"));
//IF WE  want to get the index of a particular variable we can use the index of a particular array
console.log(Fruits.indexOf("oranges"));

console.log(Fruits);

//OBJECT

const person = {
  firstName: "john",
  lastName: "deo",
  age: 30,
  hobbies: ["music", "dancing"],
  address: {
    street: "30 independent layout",
  },
};

console.log(person);

const todos = [
  {
    id: 1,
    text: "take out trash",
    isCompleted: true,
  },

  {
    id: 2,
    text: "meeting with boss",
    isCompleted: true,
  },
  {
    id: 3,
    text: "dentist appt",
    isCompleted: false,
  },
];

console.log(todos); //it gives an array todos which are all objects

//if you want to print out an array t the console e.g meeting with boss
console.log(todos[1].text);

//JSON FORMAT
/* THE diference is that we have double quotes around all the string and the keys no single quotes */

//to convert to json files
const todoJSON = JSON.stringify(todos);
console.log(todoJSON); //WE CONVERT TO JSON WHEN WE WANT TO SENT TO A SERVER.

//FOR LOOPS
//IF FOR LOOP, WE PASS IN 3 PARAMETERS
//(1) THE ASSIGNMENT OPERATOR (2) THE CONDITION THAT SHOULD BE MATE(3 THE INCREAMENT).

for (let i = 0; i < 10; i++) {
  console.log(i);
}

//while loop
let q = 0;
while (q < 10) {
  console.log(q), q++;
} //note that this method will not come out with "while loops"

//or
let i = 0;
while (i < 10) {
  console.log(`while loop Number:${i}`);
  i++;
}

//How to loop throug Array
for (let todo of todos) {
  console.log(todos);
}
//if w want to pick it by id, or text
for (let todo of todos) {
  console.log(todo.id);
}
//by text
for (let todo of todos) {
  console.log(todo.text);
}

//FOREACH.

todos.forEach(function (todo) {
  console.log(todo.text);
});

//Map
//this returns just an Array OF SPECIFICY VARIABLES

const todoText = todos.map(function (todo) {
  return todo.text;
});
console.log(todoText);

//FILTER

const todoCompleted = todos
  .filter(function (todo) {
    return todo.isCompleted === true;
  })
  .map(function (todo) {
    return todo.text;
  });
console.log(todoCompleted);

//CHAIN FILTER AND MAP

/*const todoCompleted = todo
  .filter(function (todo) {
    return todo.isCompleted === true;
  })
  .map(function (todo) {
    return todo.text;
  });
console.log(todoCompleted);*/

//conditionals

const X = 11;
if (X === 10) {
  console.log("X is 10");
} else if (X > 10) {
  console.log("X is greater than 10");
} else {
  console.log("X is less than 10");
}

//or conditional

const Y = 11;
const Z = 20;
if (Y > 11 || Z > 19) {
  console.log("on the right track");
}

//AND CONDITIONAL
const A = 11;
const D = 20;
if (A > 10 && D > 19) {
  console.log("IAM right FOR A CUP OF ICE-CREAM");
}

//ternary operator
//is used alot like a short hand but it is used to asign variables based on condiction

const w = 11;
const color = w > 10 ? "red" : "blue";
console.log(color); // this simply means that, w=10, when w>10 display red else display blue.
// ? stand for (if) (:) stands for else.

//SWITCH
//THIS IS ANOTHER WAY TO EVALUATE THE COLOR.

const t = 23;
const colorCloth = t > 34 ? "red" : "blue";

switch (colorCloth) {
  case "red":
    console.log("clothColor is red");
    break;
  case "blue":
    console.log("clothColor is blue");
    break;
  default:
    console.log("clothColor is neither red nor blue");
}

//FUNCTION

function addNum(num1, num2) {
  console.log(num1 + num2);
}
addNum(7, 8); // note that we can set our function to default by seting num 1 = to a number and same to num 2. at this point, if we pass a parameter or not, we must surly get an answre.

//object oriented programming
//OOP
//class

class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }
  getBirthYear() {
    return this.dob.getFullYear();
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

//inatantiate object
const Person1 = new Person("samuel", "mmadu", "4-6-1987");
const Person2 = new Person("jude", "okeke", "2-2-1990");

console.log(Person1.getFullName());
console.log(Person2);

//QUERY SELECTOR
//when you want to remove something from a document

const ul = documentQuerySelector("items");
ul.remove();

//if is a specific element on a document

ul.lastElementChild.remove();
