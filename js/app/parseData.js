let parseData = {};

const h2j = require('html-to-json');

parseData.parseIndexPage = function(data, err) {
  let page = h2j.parse(data, {
    'currentYear': function($doc) {
      return $doc.find('tr td ul').next().find('li a').first().text();
    }
  }, err);

  return page;
};

module.exports = parseData;
