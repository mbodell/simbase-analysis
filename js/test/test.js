// Require the built in 'assertion' library
const assert = require('assert');
const fd = require('../app/fetchData');

// Create a placeholder for a group of tests
describe('Data Loading', function() {
  // Within our data loader a startup test
  describe('test simbase main page', function() {
    // A string explanation of what we're testing
    it('Able to load the data', async function(){
      // Our actual test: -1 should equal indexOf(...)
      assert.equal(4, await fd.getPage('http://www.simbase.org/'));
    });
  });
});
