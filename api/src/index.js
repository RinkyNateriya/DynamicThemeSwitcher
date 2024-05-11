// File: src/index.js

const fs = require('fs');
const path = require('path');

// Function to read file and return contents as an array
function readFileToArray(filePath) {
    try {
        const resolvedPath = path.resolve(__dirname, '..', filePath);
        const data = fs.readFileSync(resolvedPath, 'utf8');
        return data.trim().split('\n');
    } catch (error) {
        console.error(`Error reading file ${filePath}:`, error);
        return [];
    }
}

// Read animals and food from files
const animals = readFileToArray('data/animals.txt');
const food = readFileToArray('data/food.txt');

console.log(animals);
console.log(food);



// File: src/index.js

// Animal-food mapping
const animalFoodMap = {
    cat: 'hay',
    dog: 'dogfood',
    tiger: 'deer',
    rabbit: 'carrot',
    donkey: 'hay'
};

// Function to find leftover food
function findLeftoverFood(animals, food) {
    const leftovers = [];
    for (const animal of animals) {
        const foodItem = animalFoodMap[animal];
        const index = food.indexOf(foodItem);
        if (index !== -1) {
            leftovers.push(foodItem);
            food.splice(index, 1);
        }
    }
    return leftovers;
}

// Calculate leftover food
const leftovers = findLeftoverFood(animals, food);
console.log(leftovers.join('-'));
