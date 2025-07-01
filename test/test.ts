// TypeScript test file to verify types and functionality
import { sayHello, sayHelloProps } from '../src/index';

console.log('=== TypeScript Test ===\n');

// Test valid types
const user1: sayHelloProps = {
    firstName: 'Prantin'
};

const user2: sayHelloProps = {
    firstName: 'Prantin',
    lastName: 'Developer'
};

const user3: sayHelloProps = {
    firstName: 'Prantin',
    lastName: 'Coder',
    age: 23
};

// Run tests
console.log('Testing user1 (firstName only):');
sayHello(user1);

console.log('\nTesting user2 (firstName + lastName):');
sayHello(user2);

console.log('\nTesting user3 (all properties):');
sayHello(user3);

console.log('\n=== TypeScript tests completed ===');
