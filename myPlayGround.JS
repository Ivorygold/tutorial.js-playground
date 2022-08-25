//OPERATOR

food = 20;
tipPercentage = 0.3;
tipAmount = food * tipPercentage;
//console.log(tipAmount);

//PROMPT
//This is a way to get input from the users instead of using a rigid figure

//fruit = prompt("how much is the fruit");
tipPercentage = 0.4;
//tipAmount = fruit * tipPercentage;
//console.log(tipAmount);

//to enable the user determine the %tage amount s/he will be able to give in

//plateFood = prompt("how much is the plateFood");
//tipPercentage = prompt("tip%?") / 100;
//tipAmount = plateFood * tipPercentage;
//total = plateFood + tipAmount;

//console.log(tipAmount);

// CNT FUNCTION ,console.log(total);

//for user to be away of what is hapening we use 'alert'

//alert(tipAmount);  //NOTE we use form,input and other in real life and not prompt or alert.

//To find out how much of a cost the buyer will pay we work on total.
// if we run the above function it will give us the numbers as string unless we convert the outcome to numbers.
//EX

//mango = Number(prompt("how much is the mango"));
//tipPercentage = Number(prompt("tip %?") / 100);
//tipAmount = mango * tipPercentage;
//total = mango + tipAmount;

//console.log("tip amount", tipAmount);
//console.log("total", total);

//CONDITIONAL
//BUILD A BABY WEATHER APP(CONDITIONAL)
//IF RAIN 'Grab your umbrella '
//else "wear your sunglasses"

let weather = "rain";
if (weather == "rain") {
  //console.log("Grab your umbrella");
} else {
  //console.log("wear your sunglasses");
}

//functions

//this is a function called sayMyName
//and it has zero(0) arguments
//does: it logs out my name on the console

function sayMyName() {
  console.log("Godswill");
  console.log("Udemba");
  console.log("chuks");
}

//sayMyName();

//MAKing a function more dianamic
//this has just one(1) argument
//does: it logs out my name on the console

function sayMyName2(name) {
  console.log(name);
}

//sayMyName2("solana");

function greeting(name) {
  greet = "hi " + name + ",nice to meet you!"; //this is a line of concatenation
  console.log(greet);
}

//greeting("udemba");

//template literals

function greeting(name) {
  greet = `hi ${name}, nice to meet you!`;
  console.log(greet);
}
//greeting("armber hards");

function Sum(a, b) {
  return a + b;
}
num1 = Sum(1, 4); // this line of code store the value
console.log(num1); // this logs it out
console.log(Sum(1, 3));

//build a calculator
function calculateFoodTotal(food, tip) {
  tipPecentage = tip / 100;
  tipAmount = food * tipPecentage;
  total = Sum(food, tipAmount);
  return total;
}

//console.log(calculateFoodTotal(1000, 20));

//ARROW FUNCTION
//explicit return

const SumArrow = (a, b) => {
  return a + b;
};
//console.log(SumArrow(29, 51));

//implicit return

const SumArrow2 = (a, b) => a + b;
//console.log(SumArrow2(80, 21));

//Arrays

//const groceries = ["🍌", "apple", "orange", "🍐"];
//console.log(groceries);

//THIS IS CALLED INDEXING(GRABBED THE SECOND INDEX TO GET APPLE)

//console.log(groceries[1]);

//PUSH =adding to the end of already exterblished values.
//groceries.push("🦁");
//console.log(groceries);

//Array slice
//I WANT TO GRAB TWO VALUES FROM THE ARRAYS

//console.log(groceries.slice(3, 5));
//console.log(groceries.indexOf("🍐"));
//console.log(groceries.length);

//OBJECT
// DOT NOTATION &
//BRACKET NOTATION ARE THE WAYS OF ACCESSING OBJECTS

/*onst human = {
  name: "jude",
  shirt: "blue",
};*/
//dot notation
//console.log(human.name);
//console.log(human.shirt);

//bracket notation
//console.log(human["name"]);
//console.log(human["shirt"]);

//object
//combining es6 arrow function(2 argument)
//object
//template literal
//methods math.floor()

const introducer = (name, shirt) => {
  const person = {
    name: name,
    shirt: shirt,
  };
  const intro = `hi, my name is $[person.name] and the color of my shirt is $[person.shirt]`;

  return intro;
};
console.log(introducer(`blessing`, `black`));

//LOOPS
//for loops

const nuts = ["🍌", "apple", "orange", "🍐", "🥑", "🍍", "🍉 "];
/*for (let i = 0; i < nuts.length; i++) {
  console.log(nuts[i]);
}*/

//this means that i=0 print plus 1 when i is less than nut length
//the plus 1 is represented by i++.
//dont use this loop is outdated.

//however dO this

/*for (const nut of nuts) {
 console.log(nut);
}*/

const Nuts = [1, 2, 3, 4, 5, 6, 7];
/*for (const Number of Numbers) {
  console.log(Number);}*/

//to doubleling the number above/;
/*let result = [];
for (const Nut of Nuts) {
  result.push(Nut * 2);
}
console.log(result);*/

//we can turn this is in to a function for example
/*const double = (babys) => {
  let result = [];
  for (const baby of babys) {
    result.push(baby * 2);
  }
  return result;
};
console.log(double([1, 2, 3, 4, 5, 6])); // to square all ourrespective outcome, we put another star* to(result.push(baby ** 2))
*/

//Function called letter counter
/*
const phrase = "hey, why he her girl man woman baby fine fish";
const howManyLetters = () => {
  for (letter in phrase) {
    console.log(letter);
  }
};
howManyLetters();
*/

//if i want to know the string length using users input.

/*const howManyLetters = (phrase) => {
  phrase.length;

  let result = 0;

  for (const index in phrase) {
    console.log(Number(index) + 1);
    result = Number(index) + 1;
  }
  return { result };
};
const phrase = prompt("write your phrase");
console.log(howManyLetters(phrase));*/

//sumArray
/*
const nums = [1, 2, 4, 5, 7];

const sumArray = (Numbers) => {
  let result = 0;
  for (const Number of Numbers) {
    console.log(Number);
    result = result + Number;
  }
  return { result };
};
console.log(sumArray(nums)); //this process turns 0 to 01 thereby starting from 1 and also give a sum total
*/

//using loop on Maxs

const max = (numbers) => {
  let result = numbers[0];

  for (const number of numbers) {
    if (number > result) {
      result = number;
    }
  }
  return { result };
};

console.log(max([1, 3, 13, 4, 27, 88]));

//calculating frequency( count letter)

const letterFrequency = (phrase) => {
  let frequency = {};

  for (const letter of phrase) {
    //check if letter exist in freq
    if (letter in frequency) {
      //Increament the value by 1
      frequency[letter] = frequency[letter] + 1;
      //OTHERWISE SET THE VALUE TO 1
    } else {
      frequency[letter] = 1;
    }
  }
  return frequency;
};
//console.log(
//letterFrequency("i will destroy javascript by the end of two weeks")
//);

//CALCULATING( count words)

//declay variable
const wordFrequency = (phrase) => {
  //set function
  let frequency = {};
  //split
  words = phrase.split(" ");
  //seth loop
  for (const word of words) {
    console.log(word);

    //set the word count by conditionality
    if (word in frequency) {
      frequency[word] += 1;
    } else {
      frequency[word] = 1;
    }
  }

  console.log(words);
  return frequency;
};
//console.log(wordFrequency("lol what lol wo wo wo yo yo"));

//note that we can get ride off similarities associated with the letter frequency
//and call the function return letterfrequency(words)
//and we will still get the desired result.

//ARRAY METHOD(MAP, FILTER AND REDUCE)

//Map(ARRAY METHOD)
// MAP loop and returns an array

const doubleMap = (Numbers) => {
  return Numbers.map((Number) => Number * 2);
};
//console.log(doubleMap([1, 3, 6]));

//FILTER
//FILTER HELPS US TO BING OUT NUMBER BASED ON WHAT WE NEED TO KNOW
//EX- TO GET NUMBER > A NUMBER. IT ALSO LOOP AND RETURNS AN ARRAY WITH MATCHING CONDICTION

/*const filter = (numbers, greaterThan) => {
  let result = [];
  for (const number of numbers) {
    if (number > greaterThan) {
      result.push(number);
    }
  }
  return result;
};
//console.log(filter([1, 3, 6, 8, 78], 3));
*/

//.filte
/*
const nums = [1, 4, 6, 8, 5, 9];
console.log(nums.filter((num) => num > 3));
console.log(nums.filter((num) => num > 4 || num < 3));
console.log(nums.filter((num) => num > 7 && num > 6));
*/
/*const actor = [
  { name: "van-vicker", netWorth: 221000 },
  { name: "ken-ERIC", netWorth: 340000 },
  { NAME: "NETE-Edochie", netWorth: 500000 },
];
console.log(actor.filter((actor) => actor.netWorth > 200000));
*/

//using map on filter via innerHtml

const actors = [
  { name: "van-vicker", netWorth: 221000 },
  { name: "ken-ERIC", netWorth: 340000 },
  { NAME: "pete-Edochie", netWorth: 500000 },
];
//let result = actors.filter((actor) => actor.netWorth > 200000);
//console.log(result);
//map though
//let names = result.map((actor = actor.name)).join(", ");
//myPlayGround.innerHtml = `<h1>${names}</h1>`;
console.log(actors.reduce((prev, curr) => prev + curr.netWorth, 0));

//REDUCE() :Reduce is used when you want to sum all the networth
//Sum; think reduce
//reduce takes in a function as an argument
// reduce loops and gives you back the accumulator
//you can creatb your own function anytime you are on reduce array

function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

const nums = [1, 2, 3, 4, 5];

const Result = nums.reduce(multiply);
console.log(Result);

const result = nums.reduce(sum);
//or const result=nums.reduce((a+b) => a+b,0);
console.log(result);
//const sumArrayWithReduce = (numbers) => {};

//building a calculator

//API
console.log("run 1st");
const dogImageDiv = document.getElementById(`dogImage`);
const dogImage = document.getElementById("dogImage");

const getNewDog = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((json) => {
      json.massage;
      dogImageDiv.innerHTML = `<img src='${json.massage}' height=400 width =400/>`;
    });
};
dogImage.onclick = () => getNewDog();
console.log("run 3rd");

//Spread operator Array????????
import $ from "jquerry";
import { log, logTitle } from "logger";
logTitle("Spread Operator Array");
const arrayone = ["johny", "samson", "jonah"];
const arraytwo = ["mary", "ehimery", "uchenna"];

const concatarray = [...arrayone, ...arraytwo];

concatarray.forEach(function (name) {
  log(name);
});
