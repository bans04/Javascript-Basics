//take year as a input and check it is leap year or not
const prompts = require("prompt-sync")();
let year = prompt("Enter year:-> ");
if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
    console.log(year + " is a leap year.")
}else{
    console.log(yaer + " is not leap year.")
}