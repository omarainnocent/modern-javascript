


let markMass2 = 95;
let markHeight2 = 1.88;
let johnMass2 = 85;
let johnHeight2 = 1.76;


let markBMI2 = markMass2 / markHeight2 ** 2;
let johnBMI2 = johnMass2 / johnHeight2 ** 2;

let markHigherBMI2 = markBMI2 > johnBMI2;

console.log(johnBMI2);
console.log(markHigherBMI2);
console.log( johnBMI2);

// challenge 2
if (markBMI2 > johnBMI2) {
    console.log(`Mark's BMI is higher than John's !`);
} else if (johnBMI2 > markBMI2) {
    console.log(`John's BMI is higher than Mark's !`);
} else {
    console.log(`Mark and John's BMI are the same`);
}

