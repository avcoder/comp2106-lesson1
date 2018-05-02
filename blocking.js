// link to the filesystem module
const fs = require('fs');

// print food
console.log('FOOD');

const food = fs.readFileSync('food.txt', 'utf8');
console.log(food);

// print drinks
console.log('\nDRINKS');

const drinks = fs.readFileSync('drinks.txt', 'utf8');
console.log(drinks);

//
