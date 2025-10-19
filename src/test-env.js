// Simple test to verify API connection
console.log('🔧 Environment Check:');
console.log('VITE_API_URL:', import.meta.env.VITE_API_URL);
console.log('Mode:', import.meta.env.MODE);
console.log('Dev:', import.meta.env.DEV);
console.log('Prod:', import.meta.env.PROD);

// Test API connectivity
const testAPI = async () => {
  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
  console.log('🧪 Testing API at:', apiUrl);
  
  try {
    const response = await fetch(`${apiUrl}/health`);
    const data = await response.json();
    console.log('✅ API Health Check:', data);
  } catch (error) {
    console.error('❌ API Health Check Failed:', error);
  }
};

// Run test when page loads
if (typeof window !== 'undefined') {
  window.addEventListener('load', testAPI);
}

export { testAPI };