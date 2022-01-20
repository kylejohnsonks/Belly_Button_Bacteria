// var numbers=[1,2,3,4,5];

// var doubled = numbers.map(function(num){
//     return num * 2;
// });

// console.log(doubled)

// // ------------------------------ // //  ----------------  // //  ---------------- //

var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

// var cityNames = cities.map(function(city){
//     return city.population;
// });

//same thing with arrow function
// var cityNames = cities.map(it=>it.City);
// console.log(cityNames);

// // ------------------------------ // //  ----------------  // //  ---------------- //
var numbers = [1,2,3,4,5];

var larger = numbers.filter(function(num){
    return num > 1;
});

console.log(larger);

//same thing with arrow function
var larger = numbers.filter(num=>num>1);
console.log(larger);

// // ------------------------------ // //  ----------------  // //  ---------------- //
// // Skill Drill VVVV
// You are given the following array:
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
// Filter the results to include only animals whose species name starts with the letter "s."

var sWords = words.filter(word=>word[0]=="s");
console.log(sWords)

// // ------------------------------ // //  ----------------  // //  ---------------- //
// // Family Age
var familyAge = [2,3,39,37,9];
 
var olderThanFive = familyAge.filter(function(age){
    return age > 5;
});


// // ------------------------------ // //  ----------------  // //  ---------------- //
var olderTF = familyAge.filter(num=>num>5);
console.log(olderTF);

// // ------------------------------ // //  ----------------  // //  ---------------- //
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge);

var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((anElement,anotherElement) => anElement - anotherElement);
console.log(sortedAge);


// // ------------------------------ // //  ----------------  // //  ---------------- //
var integers = [0,1,2,3,4,5];
var slice1 = integers.slice(3,5);
console.log(slice1)

// // ------------------------------ // //  ----------------  // //  ---------------- //
// Use slice() to select the first three elements of the words array.
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
console.log(words.slice(0,3));



// // ------------------------------ // //  ----------------  // //  ---------------- //


// // ------------------------------ // //  ----------------  // //  ---------------- //



// // ------------------------------ // //  ----------------  // //  ---------------- //