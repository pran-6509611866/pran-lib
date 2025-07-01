// Example: Using pran-lib in a TypeScript project with type safety
import { sayHello, sayHelloProps } from '../src/index';

console.log('🚀 pran-lib TypeScript Example\n');

// Type-safe usage examples
const student: sayHelloProps = {
    firstName: 'นักเรียน',
    lastName: 'ขยัน',
    age: 18
};

const teacher: sayHelloProps = {
    firstName: 'ครูใหญ่',
    lastName: 'ใจดี'
};

const visitor: sayHelloProps = {
    firstName: 'ผู้มาเยือน'
};

// Demonstrate usage
console.log('👨‍🎓 Student:');
sayHello(student);

console.log('\n👩‍🏫 Teacher:');
sayHello(teacher);

console.log('\n👋 Visitor:');
sayHello(visitor);

// Type checking demo - uncomment to see TypeScript errors
/*
const invalidUser: sayHelloProps = {
    // firstName: missing - will cause TypeScript error
    lastName: 'Test',
    age: 25
};
*/

console.log('\n✅ TypeScript example completed with type safety!');
