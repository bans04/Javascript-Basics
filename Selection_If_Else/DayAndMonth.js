/*
Write a program that takes day and month from the command line and prints true if
day of month is between March 20 and June 20, false otherwise. 

*/
var day = prompt("Enter the day:-> ");
var month = prompt("Enter the month:-> ");

day = parseInt(day);
month = parseInt(month);
var date;

if (month<3 || month>6) 
	console.log("False"); 
else if((date<20 && month==3) || (date>20 && month==6)) 
	console.log("False");
else
    console.log("True");