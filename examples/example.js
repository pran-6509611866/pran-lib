// Example: Using pran-lib in a JavaScript project
const { sayHello } = require('../dist/index.js');

console.log('🚀 pran-lib Example Usage\n');

// Example 1: Student introduction
console.log('📝 Student Introduction:');
sayHello({
    firstName: 'สมชาย',
    lastName: 'ใจดี',
    age: 20
});

console.log('\n---\n');

// Example 2: Teacher introduction  
console.log('👨‍🏫 Teacher Introduction:');
sayHello({
    firstName: 'อาจารย์วิรัช',
    lastName: 'สอนดี'
});

console.log('\n---\n');

// Example 3: Simple user
console.log('👤 Simple User:');
sayHello({
    firstName: 'Guest'
});

console.log('\n✅ Example completed!');
