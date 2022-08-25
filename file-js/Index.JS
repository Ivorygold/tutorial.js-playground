//my first jsvs script code!
console.log("hello world");
let name = "udemba";
console.log(name);

//rule to observer
//cannot be a reserved name
//should be meaningfull
//cannot start with a number(1name)
//cannot contain a space or a hyphen(-)
//they are case sensitive
//multiple names are to be declared togetheer
//example

//let firstName;
//let FirstName; //this two are different

let firstName = "udemba";
let lastName = "chukwumaenye";

//constant
let interestRate = ".3";
interestRate = "1";
console.log(interestRate);

//let as a variable can change but when used as a const. it cant change.
let Name = "mosh;"; // string
let age = "4"; //number
let isApproved = "true"; //boolean
let FirstName = "undefined";
let selectedColor = "null";

//Object EXAMPLE!
let person = {
  name: "ude",
  age: "29",
};
person.name = "mba"; //dot

person[name] = "gods";
console.log(person);

//persons property can be accessed through dot or bracket notation!

//Arrays!
//we can store different element in js
//example we can store the last element as anumber
let SelectedColors = ["red", "blue"];
SelectedColors[2] = "green";
SelectedColors[3] = "1";

console.log(SelectedColors);

//function! is a form of statement that performs a task or calculates a value.

//performing a task function.eg
function greet(name, lastName) {
  console.log("Hello" + name + "," + lastName);
}
greet("udemba", "Godswill");

//calculating a value!
function square(number) {
  return number * number;
}
let number = square(2);
console.log(number);

//another way to write it more clearner
console.log(square(2));

let username = "chinonye ";
let massage = "i love you";
console.log(username + "," + massage);

let user = "chi";
let Massages = "YOU have three notification";
console.log(user + "," + Massages);

let greeting = "hi, my name is";
let User = "joy anyawu";
let mygreeting = User + greeting;
console.log(greeting + "," + User);

let FIrstName = "neem ";
let LastName = "burgern";

let fullName = FIrstName + LastName;
console.log(fullName);

let Age = 100;

if (Age < 100) {
  console.log("not eligible");
} else if (Age === 100) {
  console.log("here is your birth day card from the king !");
} else {
  ("you have gotten one");
}

//DE BOOKS
const array1 = [1, 2, 3, 4, 5, 6];

array1.push(7);
array1.push(8); //add to the back
array1.pop(); //delete from the back
console.log(array1);

//for(in)
const array2 = ["all", "dig", "hammer", "good"];
for (let index in array2) {
  console.log(index); //to print integers/index
}

const array3 = ["all", "dig", "hammer", "good"];
for (let index in array2) {
  console.log(array3[index]); //to print the arrays/words
}

//for(of)
const array4 = ["all", "dig", "hammer", "good"];
for (let element of array2) {
  console.log(element);
}

const array5 = ["all", "dig", "hammer", "good"];
array4.forEach(function (element, index) {
  console.log(element);
});

//Helper (function)
/*helper function returns a portion of an existing 
with out modifying the array*/

//slice

const array6 = ["cat", "hideout", "harry", "masin", "nothings", "mose"];
{
  console.log(array6.slice(2, 5));
}

//wwe use .from to change element from one array tray to anothe
// eg, var

//.SPLICE
/* This helper function returns and changes
 the content of an array by removing existing 
 element and /or adding new elements.

 NOTE* it takes three parameters:
 the beginning index,
 the size of things to be removed, 
 and the new elements to add.
*/

const array7 = [1, 2, 3, 4, 5, 6];
{
  console.log(array7.splice(1, 3));
}

const array8 = [1, 2, 3, 4, 5, 6];
{
  console.log(array8.splice(3, 5, [7, 8, 9]));
  console.log(array8);
}

//CONCATE
const array_0 = ["good", "love", "humble"];
{
  console.log(array_0.concat(1, 3, "nice"));
}

//.LENGTH PROPERTY
let books = ("moby", "my love journey", "lie ape", "heros den", "jark bee");

//console.log(books.length);
let count = 0;
for (let i = 0; i < books.length; i++) {
  console.log(books[i]);
  if (books[i] === "heros den") {
    console.log(count);
  }
}

//SPREAD OPERATORS
//THE SPREAD OPERATOR, DENOTED BY 3 PERIODS(...) IS USED TO EXPAND ARFUMENTS WHERE ZERO ARGUMENTS ARE EXPECTED
const numbers = [1, 2, 3, 4];
function addFourNums(a, b, c, d) {
  return a + b + c + d;
}
console.log(addFourNums(...numbers));

//math.max(array)
//math.min(array)

/*given the array arr, find and return two 
indices of the array that add up to weight or
return -1 if there is no combination that adds 
up to weight*/

const arr = [1, 2, 3, 4, 5];
const weight = 9;
function arrSum(arr, weight) {
  for (let i = 0, arrLength = arr.length; i < arr.lenght; i++) {
    for (let j = i + 1; j < arr.Lenght; j++) {
      if (arr[i] + arr[j] == weight) {
        return [i, j];
      }
    }
  }
  return -1;
}
console.log(arr, weight);

//FUNCTIONAL ARRAY METHOD

//Map

const sumNumbers = (Numbers) => {
  return Numbers.map((Number) => Number * 10);
};
console.log(sumNumbers([1, 2, 3, 4, 5, 6, 7]));

//fillter
const sumiNumbers = (Numbers) => {
  return Numbers.filter((Number) => Number > 100);
};
console.log(sumiNumbers([100, 2003, 10, 203, 333, 12]));

//reduce
