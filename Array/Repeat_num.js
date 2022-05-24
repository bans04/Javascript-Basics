/*
repeated num between the 0 - 100 like 33, 22....
*/
let repeateNum = new Array();
function reverseOfNum(num) {
    let newNumber = 0;
    while (num != 0) {
        let remainder = num % 10;
        newNumber = newNumber * 10 + remainder;
        num = Math.floor(num / 10);
    }
    return newNumber;
}
for (let i = 0; i <= 100; i++) {
    if (reverseOfNum(i) === i && i > 9) {
        repeateNum.push(i)
    }
}
console.log(repeateNum);
