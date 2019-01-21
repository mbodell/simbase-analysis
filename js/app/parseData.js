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
        historyLinks.push(el.attribs.href); 
      });
      return historyLinks;
    },
    'yearLinks': function($doc) {
      const yearLinks = [];
      $doc.find('tr td ul').next().find('li a').each(function(i, el) {
        yearLinks.unshift(el.attribs.href); 
      });
      return yearLinks;
    }
  }, cb);

  return page;
};

parseData.parseYearIndexPage = function(data, cb) {
  let page = h2j.parse(data, {
    'homeLinks': function($doc) {
      const homeLinks = [];
      $doc.find('ul').slice(2).find('li').children('a').each(function(i, el) {
        if(el.attribs.href.indexOf("home") > 0) {
          homeLinks.push(el.attribs.href); 
        } 
      });
      return homeLinks;
    },
    'rosterLinks': function($doc) {
      const rosterLinks = [];
      $doc.find('ul').slice(2).find('li').children('a').each(function(i, el) {
        if(el.children[0].data === "Roster") {
          rosterLinks.push(el.attribs.href); 
        } 
      });
      return rosterLinks;
    },
    'statsLinks': function($doc) {
      const statsLinks = [];
      $doc.find('ul').slice(2).find('li').children('a').each(function(i, el) {
        if(el.children[0].data === "Statistics") {
          statsLinks.push(el.attribs.href); 
        } 
      });
      return statsLinks;
    },
    'schedLinks': function($doc) {
      const schedLinks = [];
      $doc.find('ul').slice(2).find('li').children('a').each(function(i, el) {
        if(el.attribs.href.indexOf("_sched.") > 0) {
          schedLinks.push(el.attribs.href); 
        } 
      });
      return schedLinks;
    },
    'springLinks': function($doc) {
      const springLinks = [];
      $doc.find('ul').slice(2).find('li').children('a').each(function(i, el) {
        if(el.children[0].data === "Spring") {
          springLinks.push(el.attribs.href); 
        } 
      });
      return springLinks;
    },
    'teamPlayoffLinks': function($doc) {
      const teamPlayoffLinks = [];
      $doc.find('ul').slice(2).find('li').children('a').each(function(i, el) {
        if(el.attribs.href.indexOf("_playoff_stats.") > 0) {
          teamPlayoffLinks.push(el.attribs.href); 
        } 
      });
      return teamPlayoffLinks;
    }
  }, cb);
  return page;
};

module.exports = parseData;
