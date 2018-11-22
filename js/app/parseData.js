let parseData = {};

const h2j = require('html-to-json');

parseData.parseIndexPage = function(data, cb) {
  let page = h2j.parse(data, {
    'currentYear': function($doc) {
      return $doc.find('tr td ul').next().find('li a').first().text();
    },
    'currentYearNum': function($doc) {
      return parseInt($doc.find('tr td ul').next().find('li a').first().text().slice(5));
    },
    'teamHistoryLinks': function($doc) {
      const historyLinks = [];
      $doc.find('td[valign=top]').next().find('a').each(function(i, el) {
        historyLinks.push(el.attribs.href); });
      return historyLinks;
    }
  }, cb);

  return page;
};

module.exports = parseData;
