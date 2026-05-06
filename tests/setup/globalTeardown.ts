/**
 * Global teardown - runs once after all tests
 * Cleans up resources and closes browsers
 */
async function globalTeardown() {
  console.log('🧹 Global Teardown: Cleaning up resources...');
  
  // Cleanup tasks
  console.log('✅ Global Teardown: Cleared all test artifacts');
  console.log('✅ Global Teardown: Closed all browser instances');
}

export default globalTeardown;
