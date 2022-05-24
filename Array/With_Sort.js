/* 
find seconde largest and seconde smallest num by sort array by using sort function
*/
let random;
let randomNum = [];
for (let i = 0; i < 10; i++) {
    random = Math.floor(Math.random() * 900) + 100;
    randomNum.push(random);
}
console.log("Random numbers are:-> " + randomNum);
console.log("Sorted list:-> " + randomNum.sort());

console.log("Seconde largest num is:-> " + randomNum[randomNum.length - 2]);
console.log("Seconde smallest num is:-> " + randomNum[1]);
