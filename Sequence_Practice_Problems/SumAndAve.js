//Write a program that reads 5 Random 2 Digit values , 
//then find their sum and the average

var diceNum1 = Math.floor(Math.random() * 6) + 1;
var diceNum2= Math.floor(Math.random() * 6) + 1;
var diceNum3= Math.floor(Math.random() * 6) + 1;
var diceNum4= Math.floor(Math.random() * 6) + 1;
var diceNum5= Math.floor(Math.random() * 6) + 1;

var sum = diceNum1 + diceNum2 + diceNum3 + diceNum4 + diceNum5;
console.log("sum of five random num is:-> " + sum);

var ave = sum/5;
console.log("Average of five random num is:-> " + ave);