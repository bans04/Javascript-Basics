//Unita conversions
//for ft
const feet = 12;
var inch = 42;
const result = inch/feet;
console.log(inch + " inch = " + result);

//for squqre meter
const squareMeter = 0.092903;
var length = 60;
var breath = 40;
var areaOfReactangle = length * breath * squareMeter;
console.log("Area of reactangle in meters is:-> " + areaOfReactangle);

//for acres
var numOfPlots = 25;
const acres = 2.29568e-5;
const areaOfPlots = (length * breath * acres) * 25;
console.log("Area of reactangle in acres is:_" + areaOfPlots);
