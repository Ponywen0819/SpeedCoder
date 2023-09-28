const fruits = ['apple', 'orange', 'banana'];

function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function displayFruits() {
  console.log('Fruits:');
  for (const fruit of fruits) {
    console.log(capitalizeFirstLetter(fruit));
  }
}

function calculateTotalLength() {
  let totalLength = 0;
  for (const fruit of fruits) {
    totalLength += fruit.length;
  }
  console.log('Total length of all fruits:', totalLength);
}

class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  displayInfo() {
    console.log(`Animal: ${this.name}, Type: ${this.type}`);
  }
}

const cat = new Animal('Whiskers', 'Cat');
const dog = new Animal('Buddy', 'Dog');

displayFruits();
calculateTotalLength();
cat.displayInfo();
dog.displayInfo();
