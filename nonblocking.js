// link to the filesystem module
const fs = require('fs');

// print food

fs.readFile('foodasdf.txt', 'utf8', (err, food) => {
  if (err) {
    console.log(`Error: ${err}`);
    return;
  }
  console.log('FOOD');
  console.log(food);
});

// print drinks

fs.readFile('drinks.txt', 'utf8', (err, drinks) => {
  console.log('\nDRINKS');
  console.log(drinks);
});
