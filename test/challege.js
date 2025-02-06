// let markMass2 = 95;
// let markHeight2 = 1.88;
// let johnMass2 = 85;
// let johnHeight2 = 1.76;


// let markBMI2 = markMass2 / markHeight2 ** 2;
// let johnBMI2 = johnMass2 / johnHeight2 ** 2;

// let markHigherBMI2 = markBMI2 > johnBMI2;

// console.log(johnBMI2);
// console.log(markHigherBMI2);
// console.log( johnBMI2);

// // challenge 2
// if (markBMI2 > johnBMI2) {
//     console.log(`Mark's BMI is higher than John's !`);
// } else if (johnBMI2 > markBMI2) {
//     console.log(`John's BMI is higher than Mark's !`);
// } else {
//     console.log(`Mark and John's BMI are the same`);
// }

// challenge 3
 const averageDolphins = (97 + 112 + 101) / 3;
 const averageKoalas = (109 + 95 + 106) / 3;
 
 
 console.log(averageDolphins);
 console.log(averageKoalas);

if (averageKoalas > averageDolphins && averageDolphins >= 100) {
    console.log('Dolphins wins the trophy');

}
else if (averageKoalas > averageDolphins && averageKoalas >= 100) {
    console.log('Koalas wins the trophy');
}
 else if (averageDolphins === averageKoalas && averageDolphins >= 100 && averageKoalas >= 100) {
    console.log('it is a draw');
 } 
 else {
    console.log('no team wins the trophy')
 }


//  Coding Challenge #4
// const bill = 275
// const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
// const total = (bill + tip)
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${total}`)















// CHALLENGE 1
const calcAverage = (a, b, c) => {
    return (a + b + c) / 3
}


const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

console.log(avgDolphins)
console.log(avgKoalas)


checkWinner = (dol, koa) => {
    if (dol >= 2 * koa) {
        console.log(`Dolphin win (${dol} vs ${koa})`)
    } 
    else if(koa >= 2 * dol) {
        console.log(`Koa win (${koa} vs ${dol})`)
    }
   else {
    console.log('no team wins')
   }
}

checkWinner(10, 10)


// challenge 2
const calcTip = (bill) => {
 return(bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
}

const bill = [125, 555, 44]
const tips = bill.map(calcTip)
console.log(tips);

const total = bill.map((bill, index) => bill + tips[index])
console.log(tips)
console.log(total)

// challenge 3
