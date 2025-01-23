
let fruits = ['apple', 'banana'];
let vegetables = ['carrot', 'potato'];
let numbers = [1, 2, 3, 4];

fruits.push('cherry');
console.log('After push:', fruits);

fruits.pop();
console.log('After pop:', fruits);


fruits.shift();
console.log('After shift:', fruits);


fruits.unshift('apple');
console.log('After unshift:', fruits);


fruits.splice(1, 1, 'mango'); 
console.log('After splice:', fruits);


let slicedFruits = fruits.slice(0, 2);
console.log('Sliced array:', slicedFruits);

let food = fruits.concat(vegetables);
console.log('Concatenated array:', food);


console.log('Index of mango:', fruits.indexOf('mango'));


console.log('Does array include "mango"?', fruits.includes('mango'));


console.log('Using forEach:');
fruits.forEach(fruit => console.log(fruit));


let squares = numbers.map(num => num * num);
console.log('Squares:', squares);

let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Even numbers:', evenNumbers);

let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log('Sum of numbers:', sum);


let firstEven = numbers.find(num => num % 2 === 0);
console.log('First even number:', firstEven);


let firstEvenIndex = numbers.findIndex(num => num % 2 === 0);
console.log('Index of first even number:', firstEvenIndex);


let unsortedNumbers = [4, 1, 3, 2];
unsortedNumbers.sort((a, b) => a - b);
console.log('Sorted numbers:', unsortedNumbers);


numbers.reverse();
console.log('Reversed numbers:', numbers);

let joinedFruits = fruits.join(', ');
console.log('Joined fruits:', joinedFruits);


let areAllEven = numbers.every(num => num % 2 === 0);
console.log('Are all numbers even?', areAllEven);


let isAnyEven = numbers.some(num => num % 2 === 0);
console.log('Is any number even?', isAnyEven);
