/*
Without sort find 2nd largest and 2nd smallest number
*/
let random;
let randomNum = [];
for (let i = 0; i < 10; i++) {
    random = Math.floor(Math.random() * 900) + 100;
    randomNum.push(random);
}
console.log("Random numbers are:-> " + randomNum);

for(let i = 0; i < randomNum.length; i++){
    for(let j = i + 1; j < randomNum.length; j++){
        if(randomNum[i] > randomNum[j]){
            let temp = randomNum[i];
            randomNum[i] = randomNum[j];
            randomNum[j] = temp
        }

    }
}

console.log("Sorted randomNum:-> " + randomNum);
console.log("Seconde largest num is:-> " + randomNum[randomNum.length - 2]);
console.log("Seconde smallest num is:-> " + randomNum[1]);