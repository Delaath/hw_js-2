let celsius = 25;
let fahrenheit = (celsius * 9 / 5) + 32;
console.log("temp on fahrenheit", fahrenheit);

let dayInMonth = 30;
let hoursInMonth = dayInMonth * 24;
let minutInMonth = hoursInMonth * 60;
console.log("hours in month", hoursInMonth);
console.log("minut in month", minutInMonth);

let health = 100;
let energy = 80;
health -= 20;
energy -= 15;
console.log("lvl health", health);
console.log("lvl energy", energy);

let purchaseAmount = 200;
let discount = purchaseAmount * 0.10;
let discountedAmount = purchaseAmount - discount;
console.log("amount after sell", discountedAmount);

let floatNumber = 15.76;
let roundedDown = Math.floor(floatNumber);
console.log("rounded number", floatNumber);

let floatString = "12.34";
let parsedFloat = parseFloat(floatString);
console.log("decimal number", parsedFloat);

let integerString = "42";
let parsedInteger = parseInt(integerString);
console.log("integer", parsedInteger);

let number = 49;
let sqareRoot = Math.sqrt(number);
console.log("sqare root-49", sqareRoot);

let integerValue = 123;
let stringNumber = "456";
let convertedToString = integerValue.toString();
let convertedToInteger = parseInt(stringNumber);
console.log("integer in string", convertedToString);
console.log("string in integer", convertedToInteger);

let word = "b" + "a" + +"n" + "a";
console.log(word);
