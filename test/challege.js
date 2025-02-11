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

// challenge 3
//  const averageDolphins = (97 + 112 + 101) / 3;
//  const averageKoalas = (109 + 95 + 106) / 3;
 
 
//  console.log(averageDolphins);
//  console.log(averageKoalas);

// if (averageKoalas > averageDolphins && averageDolphins >= 100) {
//     console.log('Dolphins wins the trophy');

// }
// else if (averageKoalas > averageDolphins && averageKoalas >= 100) {
//     console.log('Koalas wins the trophy');
// }
//  else if (averageDolphins === averageKoalas && averageDolphins >= 100 && averageKoalas >= 100) {
//     console.log('it is a draw');
//  } 
//  else {
//     console.log('no team wins the trophy')
//  }


//  Coding Challenge #4
// const bill = 275
// const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
// const total = (bill + tip)
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${total}`)















// CHALLENGE 1
// const calcAverage = (a, b, c) => {
//     return (a + b + c) / 3
// }


// const avgDolphins = calcAverage(44, 23, 71);
// const avgKoalas = calcAverage(65, 54, 49);

// console.log(avgDolphins)
// console.log(avgKoalas)


// checkWinner = (dol, koa) => {
//     if (dol >= 2 * koa) {
//         console.log(`Dolphin win (${dol} vs ${koa})`)
//     } 
//     else if(koa >= 2 * dol) {
//         console.log(`Koa win (${koa} vs ${dol})`)
//     }
//    else {
//     console.log('no team wins')
//    }
// }

// checkWinner(10, 10)


// challenge 2
// const calcTip = (bill) => {
//  return(bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
// }

// const bill = [125, 555, 44]
// const tips = bill.map(calcTip)
// const total = bill.map((bill, index) => bill + tips[index])
// console.log(tips)
// console.log(bill)
// console.log(total)

// challenge 3
// const mark = {
//     fullname: "Mark Miller",
//     mass: 78,
//     height: 1.69,
//     calcBMI: function() {
//         return this.mass / (this.height ** 2);
//     }
// };

// const john = {
//     fullname: "John Smith",
//     mass: 92,
//     height: 1.95,
//     calcBMI: function() {
//         return this.mass / (this.height ** 2);
//     }
// };

// console.log(mark);
// console.log(john);

// if (mark.calcBMI() > john.calcBMI()) {
//     console.log(`Mark's BMI ${mark.calcBMI()} is higher than John's BMI ${john.calcBMI()}`);
// } else if (john.calcBMI() > mark.calcBMI()) {
//     console.log(`John's BMI ${john.calcBMI()} is higher than Mark's BMI ${mark.calcBMI()}`);
// } else {
//     console.log(`Mark and John's BMI are the same.`);
// }




const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];


function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
}
function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
const averageTotal = calcAverage(totals);
console.log('Average total:', averageTotal);



// Developer Skills & Editor Setup
// challenge1

function printForecast(arr) {
    let forecastStr = '';
    for (let i = 0; i < arr.length; i++) {
        forecastStr += `... ${arr[i]}ºC in ${i + 1} days `;
    }
    console.log(forecastStr + "...");
}
printForecast([17, 21, 23]); 
printForecast([12, 5, -5, 0, 4]); 

