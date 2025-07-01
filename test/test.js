// Test script to verify the package works correctly
const { sayHello } = require('../dist/index.js');

console.log('=== Testing pran-lib package ===\n');

// Test 1: Basic usage with required parameters
console.log('Test 1: Basic usage');
sayHello({
    firstName: 'Prantin'
});

console.log('\n---\n');

// Test 2: With optional lastName
console.log('Test 2: With lastName');
sayHello({
    firstName: 'Prantin',
    lastName: 'Smith'
});

console.log('\n---\n');

// Test 3: With all parameters
console.log('Test 3: With all parameters');
sayHello({
    firstName: 'Prantin',
    lastName: 'Johnson',
    age: 25
});

console.log('\n=== All tests completed ===');
