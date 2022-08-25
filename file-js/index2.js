//peoples counter app!
//doccument.getElementById("count").innerText = 5;
/*let countEL = document.getElementById("count-el");
console.log(countEL);

let Count = 0;

let saveEL = document.getById("save-el");
let countEl = document.getById("count-el");
let count = 0;

function increment() {
  count = count + 1;
  countEL.innerText = count;
}

function save() {
  let countstr = count + ",";
  saveEL.textContent += countstr;
  countEl.textContent = 0;
  console.log(Count);
}

let count = 5;
let secondBatch = 7;
console.log(count + secondBatch);

let myAge = 56;
console.log(myAge);

let MyAge = 29;
let humanDogRatio = 7;
let MyDogAge = myAge * humanDogRatio;

console.log(MyDogAge);

//creat a variable, bonuspoint. initialize it as 50. increase it to 100.
//decrease it down to 25, and then finally increase it to 70
//console.log the value after each step.

let bonusPoint = 50;
bonusPoint = bonusPoint + 50;
console.log(bonusPoint);

bonusPoint = bonusPoint - 75;
console.log(bonusPoint);

bonusPoint = bonusPoint + 45;
console.log(bonusPoint);

console.log(2 + 4);
*/
function modularExponentiation(base, exponent, modulus) {
  if (modulus == 1) return 0;
  var value = 1;
  for (var i = 0; i < exponent; i++) {
    value = (value * base) % modulus;
  }
  return value;
}

"youtube".substring(1, 2);
