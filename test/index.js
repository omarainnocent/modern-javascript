// //values and variables
// // let country = 'Kenya';
// // let continent = 'Africa'
// // let population = '10';
// // console.log(country);
// // console.log(continent);
// // console.log(population);

// // Data type
// // let isIsland = false;
// //  let language;
// //  console.log(typeof isIsland);
// //  console.log(typeof population);
// //  console.log(typeof country);
// //  console.log(typeof language);


// // //var const
// // language = 'English';
// // const country = 'United Kingdom';
// // const continent = 'Europe';
// // const population = '30 million';
// // const isIsland = false
// // isIsland = true

// //---------------
// //basic operator
// // console.log(population / 2)
// // population ++;
// // console.log(population)
// // console.log(population>6)
// // console.log(population < 12)
// // const descriptional1 =
// // country +
// // ' is in ' +
// // continent +
// // ', and its population is ' +
// // population +
// // '24 million people'
// // language;
// // console.log(descriptional1);
// //--------------------------


// // string and template Literal
// // const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`

// // console.log(description)

// // if statement
// // if (population > 33) {
// //     console.log(`${country}'s populationis above average`)
// // }else {
// //     console.log(
// //         `${country}'s population is${33 - population} milloin below average`
// //     )
// // };

// // Type Conversion and Coercion
// // console.log('9' - '5');
// // console.log('19' - '13' + '17');
// // console.log('120' < 57)
// // console.log(5 + 6 + '4' + 9 - 4 - 2)

// // equality operators
// // let numNeighbours = prompt(
// //     'how many neighbours does your country have?'
// // );


// // let answer = Number(numNeighbours)
// // console.log('Answer: ', answer)

// // if(answer === 1){
// //     console.log('Only 1 border')
// // }
// // else if(answer > 1){
// //     console.log('MOre than 1 border')
// // }
// // else{
// //     console.log('No border')
// // }


// //logical operators
// // if (language === "English" && population < 10 && isIsland === false) {
// //     console.log(`You should live in ${country} :)`);
// //   } else {
// //     console.log(`${country} does not meet your need :(`);
// //   }
    
// // The Conditional (Ternary) Operator
// // console.log(
// //     `${country}'s population is ${population > 33 ? 
// //         'above' : 'below'} average`,
// // );

// // // switch 
// // switch (language) {
// //             case 'chinese':
// //             case 'mandarin':
// //             console.log('MOST number of native speakers!');
// //             break;
// //             case 'Japanase':
// //             console.log('2nd place in number of native speakers');
// //             break;
// //             case 'english':
// //             console.log('3rd place');
// //             break;
// //             case 'hindi':
// //             console.log('Number 4');
// //             break;
// //             case 'kishwahilli':
// //             console.log('5th most spoken language');
// //             break;
// //             default:
// //             console.log('Great language too :D');
// //     }



// //----------------------
// //PART 2 FUNCTION
//  //----------------------

//  //function

//  let country = 'Uganda'
//  let population = '30'
//  let continent = 'Africa'
//  let capital = 'Kampala'
// //  console.log(country)
// //  console.log(population)
// //  console.log(capital)
// //  console.log(continent)


//  //function//
//  function describeCountry(country, population,capital, continent) {
//       return `${country} has ${population} million people and its capitalCity is ${capital}`
//  }

//  const descUganda = describeCountry('Uganda', 10, 'Kampala')
//  const descItaly = describeCountry('Italy', 20, 'Rome')
//  const descFrance = describeCountry('France', 30, 'Paris')

// //  console.log(descUganda)
// //  console.log(descItaly)
// //  console.log(descFrance)

//  //Function Declarations vs. Expressions
//  function percentageOfWorld1(population) {
//   return (population / 8000) * 100;
//   }
//   const percentageOfWorld2 = function (population) {
//   return (population / 8000) * 100;
//   };
//   const percUganda = percentageOfWorld1(1000);
//   const percItaly = percentageOfWorld1(1200);
//   const percFrance = percentageOfWorld1(5800);
//   // console.log(percUganda, percFrance, percItaly);


// //ARROW FUNCTION
// const percentageOfWorld3 = population => (population / 8000) * 100
// const percUganda1 = percentageOfWorld3(30)
// const percItaly1 = percentageOfWorld3(20)
// const percFrance1 = percentageOfWorld3(50)

// // console.log(percFrance1, percItaly1, percUganda1)


// // function calling other function
// const describePopulation = function (country, population) {
//   const percentage = percentageOfWorld1(population);
//   const description = `${country} has ${population} million
//   people, which is about ${percentage}% of the world.`;
//   // console.log(description);
//   };
//   // describePopulation('Uganda', 20);
//   // describePopulation('Italy', 2200);
//   // describePopulation('France', 664);



//   //: Introduction to Arrays
//   const populations = [20, 2882, 664, 156]
//   // // console.log(populations, populations.length === 4)
//   // const percentages = [
//   //   percentageOfWorld1(populations[0]),
//   //   percentageOfWorld1(populations[1]),
//   //   percentageOfWorld1(populations[2]),
//   //   percentageOfWorld1(populations[3]),
//   // ]
//   // console.log(percentages)


//   //Basic Array Operations (Methods)
//   const neighbours = ['Rwanda', 'Burundi', 'Tanzania']
//   neighbours. push('Kigali')
//   // console.log(neighbours)

//   // neighbours.pop()
//   // console.log(neighbours)

// // if (neighbours.includes('Tanzania')) {
// //   console.log('probably not a country from Asia :D')
// // }

// neighbours[neighbours.indexOf('kenya')] = 'Republic of Kenya'
// // console.log(neighbours)


// //Introduction to Objects
// // const myCountry = {
// //   country: 'Tanzania',
// //   capital: 'Dodoma',
// //   population: 6,
// //   language: 'Kiswahilli',
// //   neighbours: ['Uganda', 'Kenya', 'Mozambique']
// // }

// // Dot vs. Bracket Notation
// // console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language} - speaking people ${myCountry.neighbours.length} neighbouring countries and capital called ${capital}
// //   `)

//   // myCountry.population += 2
//   // console.log(myCountry.population) 
//   // myCountry.population -= 2
//   // console.log(myCountry.population)

//   //Object Methods
//   const myCountry = {
//     country: 'South Africa',
//     capital: 'Cape town',
//     language: 'english',
//     population: 6,
//     voter: 50,
//     neighbours: ['Norway', 'Sweden', 'Russia'],
//     describe: function () {
//     console.log(
//     `${this.country} has ${this.population} million
//     ${this.language}-speaking people,
//     ${this.neighbours.length} neighbouring countries and a
//     capital called ${this.capital}.`
//     );
//     },
//     checkIsland: function () {
//     this.isIsland = this.neighbours.length === 0 ? true :
//     false;
    // Even simpler version (see why this works...)
    // this.isIsland = !Boolean(this.neighbours.length);
//     }
//     };
    // myCountry.describe();
//     myCountry.checkIsland();
    // console.log(myCountry);


// //Iteration: FOR LOOP
// for (let voter = 1; voter <= 100; voter++)
//   console.log(`Voter number ${voter} is currently voting`);


// // : Looping Arrays, Breaking and Continuing
// const populations = [20, 2882, 662, 156];
//  const percentages2 = [];
//  for (let i = 0; i < populations.length; i++) {
//  const perc = percentageOfWorld1(populations[i]);
//  percentages2.push(perc);
//  }
//  console.log(percentages2)

// //  const listOfNeighbours = [
// //   ['Zambia', 'Ghana'],
// //   ['Congo'],
// //   ['Lybia', 'South Africa', 'Liberia'],
// //   ];
// //   for (let i = 0; i < listOfNeighbours.length; i++)
// //   for (let y = 0; y < listOfNeighbours[i].length; y++)
// //   console.log(`Neighbour: ${listOfNeighbours[i][y]}`)



//   //Looping Backwards and Loops in Loop
//   const listOfNeighbours = [
//     ['Zambia', 'Ghana', 'Congo', 'Lybia', 'South Africa', 'Liberia']
//   ];
// for (let i = 0; i < listOfNeighbours.length; i++) {
//     for (let y = listOfNeighbours[i].length - 1; y >= 0; y--) {
//         console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
//     }
// }



// //  //The while Loop
// const percentage3 = [];
// let i = 0

// console.log(percentage3)

// while(i < population.length){
//   console.log(populations)
//   const perc = percentageOfWorld1(populations[i])
//   percentage3.push(perc)
//   i++
// }
// console.log(percentage3)
// while (1 < population?.length) {
  // console.log(population)
//   const perc = percentageOfWorld1(populations[i]);
//   percentage3.push(perc);
//   i++;
// }

// console.log(percentage3)
