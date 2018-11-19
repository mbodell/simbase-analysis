// Require the built in 'assertion' library
const assert = require('assert');
const fd = require('../app/fetchData');
const pd = require('../app/parseData');

var err = function(error, results) {
  console.log(results);
};

// Create a placeholder for a group of tests
describe('Data Loading', function() {
  describe('test simbase main page', function() {
    // A string explanation of what we're testing
    it('Able to load the data, no parsing, so return 0', async function() {
      // Our actual test: -1 should equal indexOf(...)
      assert.equal(0, await fd.getPage('http://www.simbase.org/'));
    });
    it('Able to parse the most recent years', async function() {
      let doc = await fd.getPage('http://www.simbase.org/', pd.parseIndexPage, err);
      assert.equal('Year 82', doc.currentYear);
    });
  });
});
