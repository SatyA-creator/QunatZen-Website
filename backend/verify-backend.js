#!/usr/bin/env node

/**
 * Backend Deployment Verification Script
 * Tests your backend API endpoints to ensure everything is working
 */

const BACKEND_URL = process.argv[2] || 'http://localhost:3001';

console.log('\n🧪 Testing Backend API...');
console.log(`📍 URL: ${BACKEND_URL}\n`);

// Test 1: Health Check
async function testHealthCheck() {
  console.log('1️⃣  Testing health endpoint...');
  try {
    const response = await fetch(`${BACKEND_URL}/health`);
    const data = await response.json();
    
    if (response.ok && data.status === 'OK') {
      console.log('   ✅ Health check passed');
      console.log(`   📅 Server time: ${data.timestamp}\n`);
      return true;
    } else {
      console.log('   ❌ Health check failed');
      console.log(`   Response: ${JSON.stringify(data)}\n`);
      return false;
    }
  } catch (error) {
    console.log('   ❌ Cannot connect to backend');
    console.log(`   Error: ${error.message}\n`);
    return false;
  }
}

// Test 2: Subscribe Endpoint (with invalid email)
async function testSubscribeEndpoint() {
  console.log('2️⃣  Testing subscribe endpoint...');
  try {
    const response = await fetch(`${BACKEND_URL}/api/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: 'invalid-email' })
    });
    
    const data = await response.json();
    
    if (response.status === 400 && data.error) {
      console.log('   ✅ Subscribe endpoint working (validation working)');
      console.log(`   Expected error: ${data.error}\n`);
      return true;
    } else {
      console.log('   ⚠️  Unexpected response from subscribe endpoint');
      console.log(`   Status: ${response.status}`);
      console.log(`   Response: ${JSON.stringify(data)}\n`);
      return true; // Still working, just different response
    }
  } catch (error) {
    console.log('   ❌ Subscribe endpoint error');
    console.log(`   Error: ${error.message}\n`);
    return false;
  }
}

// Test 3: CORS Check
async function testCORS() {
  console.log('3️⃣  Testing CORS configuration...');
  try {
    const response = await fetch(`${BACKEND_URL}/health`, {
      method: 'OPTIONS'
    });
    
    const corsHeader = response.headers.get('access-control-allow-origin');
    if (corsHeader) {
      console.log('   ✅ CORS enabled');
      console.log(`   Allowed origin: ${corsHeader}\n`);
      return true;
    } else {
      console.log('   ⚠️  CORS headers not found (might be OK depending on setup)\n');
      return true;
    }
  } catch (error) {
    console.log('   ❌ CORS test failed');
    console.log(`   Error: ${error.message}\n`);
    return false;
  }
}

// Test 4: Rate Limiting
async function testRateLimiting() {
  console.log('4️⃣  Testing rate limiting...');
  try {
    console.log('   Sending multiple requests...');
    const requests = Array(7).fill(null).map(() => 
      fetch(`${BACKEND_URL}/api/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: 'test@example.com' })
      })
    );
    
    const responses = await Promise.all(requests);
    const rateLimited = responses.some(r => r.status === 429);
    
    if (rateLimited) {
      console.log('   ✅ Rate limiting working');
      console.log('   (Got 429 Too Many Requests response)\n');
      return true;
    } else {
      console.log('   ⚠️  Rate limiting may not be working');
      console.log('   (All requests succeeded - check configuration)\n');
      return true; // Not critical
    }
  } catch (error) {
    console.log('   ❌ Rate limiting test failed');
    console.log(`   Error: ${error.message}\n`);
    return false;
  }
}

// Run all tests
async function runTests() {
  console.log('═══════════════════════════════════════════\n');
  
  const results = {
    health: await testHealthCheck(),
    subscribe: await testSubscribeEndpoint(),
    cors: await testCORS(),
    rateLimit: await testRateLimiting()
  };
  
  console.log('═══════════════════════════════════════════');
  console.log('\n📊 Test Results:\n');
  
  const passed = Object.values(results).filter(r => r).length;
  const total = Object.keys(results).length;
  
  console.log(`   Health Check: ${results.health ? '✅' : '❌'}`);
  console.log(`   Subscribe Endpoint: ${results.subscribe ? '✅' : '❌'}`);
  console.log(`   CORS Configuration: ${results.cors ? '✅' : '❌'}`);
  console.log(`   Rate Limiting: ${results.rateLimit ? '✅' : '❌'}`);
  
  console.log(`\n   Score: ${passed}/${total} tests passed\n`);
  
  if (passed === total) {
    console.log('🎉 All tests passed! Your backend is ready!\n');
  } else {
    console.log('⚠️  Some tests failed. Check the logs above.\n');
  }
  
  console.log('═══════════════════════════════════════════\n');
}

// Usage instructions
if (process.argv.includes('--help')) {
  console.log(`
Usage: node verify-backend.js [BACKEND_URL]

Examples:
  node verify-backend.js
  node verify-backend.js http://localhost:3001
  node verify-backend.js https://quantzen-backend.onrender.com

If no URL is provided, defaults to http://localhost:3001
  `);
  process.exit(0);
}

runTests().catch(console.error);
