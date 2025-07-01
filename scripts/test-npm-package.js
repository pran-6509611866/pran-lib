#!/usr/bin/env node

/**
 * Script to test the package as if it was installed from npm
 * This creates a temporary directory, packs the current package,
 * and installs it to test the actual npm package behavior
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🧪 Testing package as if installed from npm...\n');

// Get the project root directory (parent of scripts directory)
const projectRoot = path.join(__dirname, '..');
process.chdir(projectRoot);

// Create temp directory
const tempDir = path.join(projectRoot, 'temp-test');
if (fs.existsSync(tempDir)) {
    fs.rmSync(tempDir, { recursive: true });
}
fs.mkdirSync(tempDir);

try {
    // Build the package
    console.log('📦 Building package...');
    execSync('npm run build', { stdio: 'inherit' });

    // Pack the package
    console.log('📦 Packing package...');
    const packResult = execSync('npm pack', { encoding: 'utf8' });
    const packageFile = packResult.trim();
    
    // Move to temp directory
    const tempPackagePath = path.join(tempDir, packageFile);
    fs.renameSync(packageFile, tempPackagePath);

    // Create test package.json in temp directory
    const testPackageJson = {
        "name": "test-pran-lib",
        "version": "1.0.0",
        "private": true,
        "type": "commonjs"
    };
    
    fs.writeFileSync(
        path.join(tempDir, 'package.json'), 
        JSON.stringify(testPackageJson, null, 2)
    );

    // Install the packed package
    console.log('📥 Installing packed package...');
    execSync(`npm install ${packageFile}`, { 
        cwd: tempDir, 
        stdio: 'inherit' 
    });

    // Create test file
    const testFile = `
const { sayHello } = require('@prantin/pran-lib');

console.log('🎉 Testing installed package from npm!\\n');

sayHello({
    firstName: 'ทดสอบ',
    lastName: 'จาก npm',
    age: 1
});

console.log('\\n✅ npm package test successful!');
`;

    fs.writeFileSync(path.join(tempDir, 'test-npm.js'), testFile);

    // Run the test
    console.log('🚀 Running npm package test...\n');
    execSync('node test-npm.js', { 
        cwd: tempDir, 
        stdio: 'inherit' 
    });

    console.log('\n🎊 All npm tests passed!');

} catch (error) {
    console.error('❌ Test failed:', error.message);
    process.exit(1);
} finally {
    // Cleanup
    if (fs.existsSync(tempDir)) {
        fs.rmSync(tempDir, { recursive: true });
    }
    console.log('🧹 Cleanup completed');
}
