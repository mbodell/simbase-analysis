// Require the built in 'assertion' library
var assert = require('assert');
// Create a placeholder for a group of tests
describe('Data Loading', function() {
  // Within our data loader a startup test
  describe('test setup', function() {
    // A string explanation of what we're testing
    it('should return pass when 0 is 0', function(){
      // Our actual test: -1 should equal indexOf(...)
      assert.equal(0, 0);
    });
  });
});
