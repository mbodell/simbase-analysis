let parseData = {};

const h2j = require('html-to-json');

parseData.parseIndexPage = function(data, err) {
  let page = h2j.parse(data, {
    'currentYear': function($doc) {
      return $doc.find('tr td ul').next().find('li a').first().text();
    },
    'currentYearNum': function($doc) {
      return parseInt($doc.find('tr td ul').next().find('li a').first().text().slice(5));
    }
  }, err);

  return page;
};

module.exports = parseData;
