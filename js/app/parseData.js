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

parseData.parseSpringPage = function(data, cb) {
  var lines = data.split("\n");
	var players = [];
	players.hitters = [];
	players.pitchers = [];
	var state = 0;
	lines.forEach(function(line, index) {
		if(index === 0) {
			state++;
		} else {
			var pos = line.slice(0,2).trim();
			var id = line.slice(4,8);
			var name = line.slice(9,24).trim();
			var ba = line.slice(25,30);
			var obp = line.slice(31,36);
			var slg = line.slice(37,42);
			var ops = line.slice(43,48);
			var age = line.slice(50,52);
			var spd = line.slice(54,56);
			var def = line.slice(58,60);
			var arm = line.slice(62,64);
			var pa = line.slice(65,68);
			if (pos === "PO") {
				state++;
			} else if (state === 1) {
				players.push({"pos": pos, "id": id, "name": name, "ba": ba,
					"obp": obp, "slg": slg, "ops": ops, "age": age, "pa": pa,
					"spd": spd, "arm": arm, "def": def})
				players.hitters.push({"pos": pos, "id": id, "name": name, "ba": ba,
					"obp": obp, "slg": slg, "ops": ops, "age": age, "pa": pa,
					"spd": spd, "arm": arm, "def": def})
			} else {
				players.push({"pos": pos, "id": id, "name": name, "ba": ba,
					"obp": obp, "slg": slg, "ops": ops, "age": age, "pa": pa,
					"gb": spd, "fb": def, "ld": arm})
				players.pitchers.push({"pos": pos, "id": id, "name": name, "ba": ba,
					"obp": obp, "slg": slg, "ops": ops, "age": age, "pa": pa,
					"gb": spd, "fb": def, "ld": arm})
			}
		}
	});
	return players;
}

module.exports = parseData;
