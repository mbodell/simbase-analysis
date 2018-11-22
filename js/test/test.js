// Require the built in 'assertion' library
const assert = require('assert');
const fd = require('../app/fetchData');
const pd = require('../app/parseData');

var err = function(error, results) {
  console.log(error);
  console.log(results);
};

// Create a placeholder for a group of tests on loading data
describe('Data Loading', function() {
  describe('test simbase main page', function() {
    it('Able to load the data, no parsing, so return 0', async function() {
      assert.equal(0, await fd.getPage('http://www.simbase.org/'));
    });
  });
});

var simbaseIndexPage = `<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8">
<title>simbasev3 home</title>
</head>
<body>welcome to simbasev3.<p>
<table cellpadding=12><tr><td valign=top>
<ul>
<li><a href="player_finder.html">Player search</a>
<li><a href="information.html">League information</a>
<li><a href="calendar.html">Calendar</a>
<li><a href="http://groups.google.com/group/simbase3/">Google group</a>
<li><a href="trades.txt">Trades</a>
<li><a href="nohitters.txt">No-hitters (all incarnations)</a>
<li>Career leaders: <a href="career_leaders-hit.html">Hitting</a> <a href="career_leaders-pitch.html">Pitching</a> <a href="career_leaders-field.html">Fielding</a>
<li>Career losers: <a href="career_losers-hit.html">Hitting</a> <a href="career_losers-pitch.html">Pitching</a> <a href="career_losers-field.html">Fielding</a>
<li>Single-season leaders: <a href="single_season_leaders_hitters.html">Hitting</a> <a href="single_season_leaders_pitchers.html">Pitching</a>
<li>Playoff leaders: <a href="career_playoff-leaders-hit.html">Hitting</a> <a href="career_playoff-leaders-pitch.html">Pitching</a> <a href="career_playoff-leaders-field.html">Fielding</a>
<li>Playoff losers: <a href="career_playoff-losers-hit.html">Hitting</a> <a href="career_playoff-losers-pitch.html">Pitching</a> <a href="career_playoff-losers-field.html">Fielding</a>
<li><a href="allh2h.html">All-time head-to-head records</a>
<li><a href="drafted_players.html">All drafted players</a>
<li><a href="hof/hof.html">Hall of Fame</a>
<li><a href="picks.txt">Future traded draft picks</a>
</ul><ul><li><a href="year82/simbase.html">Year 82</a> (in progress, day 34)
</li>
<li><a href="year81/simbase.html">Year 81</a> (WS: <b>Baltimore [2]</b> d. San Jose 4-1; MVP: Hugo S?nchez M?rquez [2])
</li>
<li><a href="year80/simbase.html">Year 80</a> (WS: <b>Kratovo [5]</b> d. Omsk 4-2; MVP: Hugo S?nchez M?rquez [1])
</li>
<li><a href="year79/simbase.html">Year 79</a> (WS: <b>Omsk [6]</b> d. Kratovo 4-1; MVP: Clyde Drexler [2])
</li>
<li><a href="year78/simbase.html">Year 78</a> (WS: <b>Seattle [23]</b> d. Baltimore 4-3; MVP: Clyde Drexler [1])
</li>
<li><a href="year77/simbase.html">Year 77</a> (WS: <b>San Jose [3]</b> d. Kratovo 4-3; MVP: Selina Meyer [2])
</li>
<li><a href="year76/simbase.html">Year 76</a> (WS: <b>Seattle [22]</b> d. Circus 4-1; MVP: Jay Pritchett [1])
</li>
<li><a href="year75/simbase.html">Year 75</a> (WS: <b>Seattle [21]</b> d. Sao Paulo 4-2; MVP: Vince Gilligan [1])
</li>
<li><a href="year74/simbase.html">Year 74</a> (WS: <b>Seattle [20]</b> d. Los Angeles 4-3; MVP: Selina Meyer [1])
</li>
<li><a href="year73/simbase.html">Year 73</a> (WS: <b>Sao Paulo [12]</b> d. Los Angeles 4-3; MVP: Let\'s Get Ready To Rumble [1])
</li>
<li><a href="year72/simbase.html">Year 72</a> (WS: <b>Circus [1]</b> d. Los Angeles 4-1; MVP: Foxes [3])
</li>
<li><a href="year71/simbase.html">Year 71</a> (WS: <b>Milan [1]</b> d. Compton 4-3; MVP: Alicia Machado [1])
</li>
<li><a href="year70/simbase.html">Year 70</a> (WS: <b>Compton [3]</b> d. Stratford 4-2; MVP: Lais Ribero [2])
</li>
<li><a href="year69/simbase.html">Year 69</a> (WS: <b>Sao Paulo [11]</b> d. Paddington 4-1; MVP: Lais Ribero [1])
</li>
<li><a href="year68/simbase.html">Year 68</a> (WS: <b>Seattle [19]</b> d. Compton 4-0; MVP: Sting [1])
</li>
<li><a href="year67/simbase.html">Year 67</a> (WS: <b>Kansas City [5]</b> d. Paddington 4-1; MVP: Foxes [2])
</li>
<li><a href="year66/simbase.html">Year 66</a> (WS: <b>Seattle [18]</b> d. Compton 4-1; MVP: Foxes [1])
</li>
<li><a href="year65/simbase.html">Year 65</a> (WS: <b>Seattle [17]</b> d. Multiverse 4-1; MVP: Liz Lemon [2])
</li>
<li><a href="year64/simbase.html">Year 64</a> (WS: <b>Seattle [16]</b> d. Multiverse 4-0; MVP: Liz Lemon [1])
</li>
<li><a href="year63/simbase.html">Year 63</a> (WS: <b>Los Angeles [4]</b> d. Multiverse 4-1; MVP: Rikki Tikki Tavi [1])
</li>
<li><a href="year62/simbase.html">Year 62</a> (WS: <b>Stratford [5]</b> d. Kansas City 4-1; MVP: Kelly Gale [1])
</li>
<li><a href="year61/simbase.html">Year 61</a> (WS: <b>Los Angeles [3]</b> d. Almaty 4-3; MVP: Alex Russo [1])
</li>
<li><a href="year60/simbase.html">Year 60</a> (WS: <b>Paddington [6]</b> d. Los Angeles 4-2; MVP: Ron Swanson [1])
</li>
<li><a href="year59/simbase.html">Year 59</a> (WS: <b>Sao Paulo [10]</b> d. Philadelphia 4-0; MVP: Simba [1])
</li>
<li><a href="year58/simbase.html">Year 58</a> (WS: <b>Sao Paulo [9]</b> d. Philadelphia 4-3; MVP: Guido Anchovy [1])
</li>
<li><a href="year57/simbase.html">Year 57</a> (WS: <b>Seattle [15]</b> d. Sao Paulo 4-2; MVP: Rebel Alley [1])
</li>
<li><a href="year56/simbase.html">Year 56</a> (WS: <b>Sao Paulo [8]</b> d. Seattle 4-3; MVP: Hugo Chavez [1])
</li>
<li><a href="year55/simbase.html">Year 55</a> (WS: <b>Seattle [14]</b> d. Paddington 4-2; MVP: Laimdota Straujuma [2])
</li>
<li><a href="year54/simbase.html">Year 54</a> (WS: <b>Stratford [4]</b> d. Compton 4-1; MVP: Charles Michel [2])
</li>
<li><a href="year53/simbase.html">Year 53</a> (WS: <b>Compton [2]</b> d. Milan 4-2; MVP: Charles Michel [1])
</li>
<li><a href="year52/simbase.html">Year 52</a> (WS: <b>Stratford [3]</b> d. Cyberspace 4-2; MVP: Mark Itabashi [3])
</li>
<li><a href="year51/simbase.html">Year 51</a> (WS: <b>Seattle [13]</b> d. Compton 4-1; MVP: Mark Itabashi [2])
</li>
<li><a href="year50/simbase.html">Year 50</a> (WS: <b>San Jose [2]</b> d. Seattle 4-2; MVP: Laimdota Straujuma [1])
</li>
<li><a href="year49/simbase.html">Year 49</a> (WS: <b>Compton [1]</b> d. Washington 4-2; MVP: Jake Brigance [1])
</li>
<li><a href="year48/simbase.html">Year 48</a> (WS: <b>Berkeley [4]</b> d. Stockholm 4-3; MVP: The Doctor [1])
</li>
<li><a href="year47/simbase.html">Year 47</a> (WS: <b>Philadelphia [4]</b> d. Berkeley 4-3; MVP: Mark Itabashi [1])
</li>
<li><a href="year46/simbase.html">Year 46</a> (WS: <b>Philadelphia [3]</b> d. Brussels 4-3; MVP: Lucretia Mott [1])
</li>
<li><a href="year45/simbase.html">Year 45</a> (WS: <b>Philadelphia [2]</b> d. Berkeley 4-2; MVP: Carmen Sandiego [2])
</li>
<li><a href="year44/simbase.html">Year 44</a> (WS: <b>Seattle [12]</b> d. Brooklyn 4-2; MVP: Carmen Sandiego [1])
</li>
<li><a href="year43/simbase.html">Year 43</a> (WS: <b>Seattle [11]</b> d. Broadway 4-0; MVP: Igor Netto [6])
</li>
<li><a href="year42/simbase.html">Year 42</a> (WS: <b>Brooklyn [5]</b> d. Seattle 4-2; MVP: Boris Strugatsky [1])
</li>
<li><a href="year41/simbase.html">Year 41</a> (WS: <b>Seattle [10]</b> d. Los Angeles 4-1; MVP: Kele Okereke [1])
</li>
<li><a href="year40/simbase.html">Year 40</a> (WS: <b>San Jose [1]</b> d. Broadway 4-2; MVP: Johnny Cash [2])
</li>
<li><a href="year39/simbase.html">Year 39</a> (WS: <b>Stockholm [1]</b> d. Seattle 4-3; MVP: Igor Netto [5])
</li>
<li><a href="year38/simbase.html">Year 38</a> (WS: <b>Kratovo [4]</b> d. Seattle 4-1; MVP: Igor Netto [4])
</li>
<li><a href="year37/simbase.html">Year 37</a> (WS: <b>Seattle [9]</b> d. San Jose 4-3; MVP: Johnny Cash [1])
</li>
<li><a href="year36/simbase.html">Year 36</a> (WS: <b>Brussels [7]</b> d. Acton 4-2; MVP: Igor Netto [3])
</li>
<li><a href="year35/simbase.html">Year 35</a> (WS: <b>Las Vegas [3]</b> d. Kratovo 4-3; MVP: Igor Netto [2])
</li>
<li><a href="year34/simbase.html">Year 34</a> (WS: <b>Brussels [6]</b> d. Pittsburgh 4-2; MVP: Saskia van Rijn [2] and Vito Corleone [1])
</li>
<li><a href="year33/simbase.html">Year 33</a> (WS: <b>Pittsburgh [1]</b> d. Las Vegas 4-3; MVP: Igor Netto [1])
</li>
<li><a href="year32/simbase.html">Year 32</a> (WS: <b>Acton [2]</b> d. Seattle 4-2; MVP: Karapet [1])
</li>
<li><a href="year31/simbase.html">Year 31</a> (WS: <b>Seattle [8]</b> d. Pittsburgh 4-2; MVP: Solid Snake [1])
</li>
<li><a href="year30/simbase.html">Year 30</a> (WS: <b>Las Vegas [2]</b> d. Seattle 4-1; MVP: Riou [1])
</li>
<li><a href="year29/simbase.html">Year 29</a> (WS: <b>Brooklyn [4]</b> d. Milan 4-2; MVP: Phineas Taylor Barnum [1])
</li>
<li><a href="year28/simbase.html">Year 28</a> (WS: <b>Los Angeles [2]</b> d. Brooklyn 4-1; MVP: Saskia van Rijn [1])
</li>
<li><a href="year27/simbase.html">Year 27</a> (WS: <b>Brooklyn [3]</b> d. Milan 4-1; MVP: Jimi Hendrix [3])
</li>
<li><a href="year26/simbase.html">Year 26</a> (WS: <b>Brooklyn [2]</b> d. Seattle 4-2; MVP: Jimi Hendrix [2])
</li>
<li><a href="year25/simbase.html">Year 25</a> (WS: <b>Kratovo [3]</b> d. Milan 4-2; MVP: Victor Hugo [1])
</li>
<li><a href="year24/simbase.html">Year 24</a> (WS: <b>Brussels [5]</b> d. Kratovo 4-2; MVP: Jimi Hendrix [1])
</li>
<li><a href="year23/simbase.html">Year 23</a> (WS: <b>Kratovo [2]</b> d. Broadway 4-2; MVP: Marvin Miller [1] and Face [2])
</li>
<li><a href="year22/simbase.html">Year 22</a> (WS: <b>Brussels [4]</b> d. Seattle 4-2; MVP: Face [1])
</li>
<li><a href="year21/simbase.html">Year 21</a> (WS: <b>Seattle [7]</b> d. Stamford 4-2; MVP: Ryu Hayabusa [1])
</li>
<li><a href="year20/simbase.html">Year 20</a> (WS: <b>Seattle [6]</b> d. Broadway 4-1; MVP: Kathy Ireland [1])
</li>
<li><a href="year19/simbase.html">Year 19</a> (WS: <b>Seattle [5]</b> d. Broadway 4-1; MVP: Jean Anouilh [1])
</li>
<li><a href="year18/simbase.html">Year 18</a> (WS: <b>Broadway [2]</b> d. San Jose 4-3; MVP: Harold Pinter [1])
</li>
<li><a href="year17/simbase.html">Year 17</a> (WS: <b>Industry [3]</b> d. San Jose 4-3; MVP: Walter Reuther [1])
</li>
<li><a href="year16/simbase.html">Year 16</a> (WS: <b>Stamford [1]</b> d. Dodge City 4-2; MVP: Jed Clampett [3])
</li>
<li><a href="year15/simbase.html">Year 15</a> (WS: <b>Brooklyn [1]</b> d. Seattle 4-1; MVP: Giorgio Belladonna [1])
</li>
<li><a href="year14/simbase.html">Year 14</a> (WS: <b>Kratovo [1]</b> d. Dodge City 4-2; MVP: Gilad Anni-Padda [1])
</li>
<li><a href="year13/simbase.html">Year 13</a> (WS: <b>Industry [2]</b> d. Terra 4-1; MVP: Tanya Adams [1])
</li>
<li><a href="year12/simbase.html">Year 12</a> (WS: <b>Brussels [3]</b> d. Brooklyn 4-3; MVP: Jed Clampett [2])
</li>
<li><a href="year11/simbase.html">Year 11</a> (WS: <b>Brussels [2]</b> d. Seattle 4-1; MVP: Jose Socrates [1])
</li>
<li><a href="year10/simbase.html">Year 10</a> (WS: <b>Las Vegas [1]</b> d. Brussels 4-3; MVP: Jonas Grumby [1])
</li>
<li><a href="year9/simbase.html">Year 9</a> (WS: <b>Los Angeles [1]</b> d. Brussels 4-1; MVP: Jed Clampett [1])
</li>
<li><a href="year8/simbase.html">Year 8</a> (WS: <b>Brussels [1]</b> d. San Jose 4-2; MVP: Anton Chekhov [2])
</li>
<li><a href="year7/simbase.html">Year 7</a> (WS: <b>Seattle [4]</b> d. Pittsburgh 4-3; MVP: Andre the Giant [2])
</li>
<li><a href="year6/simbase.html">Year 6</a> (WS: <b>Seattle [3]</b> d. Pittsburgh 4-1; MVP: Andre the Giant [1])
</li>
<li><a href="year5/simbase.html">Year 5</a> (WS: <b>Industry [1]</b> d. Seattle 4-2; MVP: Natalie Merchant [1])
</li>
<li><a href="year4/simbase.html">Year 4</a> (WS: <b>Broadway [1]</b> d. Terra 4-2; MVP: Anton Chekhov [1])
</li>
<li><a href="year3/simbase.html">Year 3</a> (WS: <b>Terra [1]</b> d. Stamford 4-3; MVP: Aunt Bee [1])
</li>
<li><a href="year2/simbase.html">Year 2</a> (WS: <b>Seattle [2]</b> d. Terra 4-3; MVP: George Hanson [1])
</li>
<li><a href="year1/simbase.html">Year 1</a> (WS: <b>Seattle [1]</b> d. Terra 4-1; MVP: Bruce Banner [1])
</li>
</ul></td>
<td valign=top>Teams:<br><a href="avangard_history.html">Avangard Omsk</a> (Bobby Woods-Corwin)<br>
<a href="blizzard_history.html">Columbus Blizzard</a> (None)<br>
<a href="bullets_history.html">Baltimore Bullets</a> (Alex Lovejoy)<br>
<a href="magicians_history.html">Multiverse Magicians</a> (Solomon Stein)<br>
<a href="oldones_history.html">Arkham Old Ones</a> (Geoff Smith)<br>
<a href="southpaws_history.html">Sao Paulo Southpaws</a> (Chad Davis)<br>
<br>
<a href="aztecs_history.html">Kratovo Aztecs</a> (Lev Polinsky)<br>
<a href="bears_history.html">Paddington Bears</a> (Alex Saltman)<br>
<a href="circus_history.html">Flying Circus</a> (Igor Teper)<br>
<a href="models_history.html">Milan Models</a> (Paul Lujan)<br>
<a href="players_history.html">Stratford Players</a> (Joon Pahk)<br>
<a href="tribe_history.html">Tel Aviv Tribe</a> (Laser Kaplan)<br>
<br>
<a href="angst_history.html">Seattle Angst</a> (Mike Develin)<br>
<a href="internet_history.html">Cyberspace Internet</a> (Michael Bodell)<br>
<a href="rappers_history.html">Compton Rappers</a> (Nathan Kaplan)<br>
<a href="sexwales_history.html">San Jose Sexwales</a> (David Scotton)<br>
<a href="stars_history.html">Hollywoo Stars and Celebrities</a> (None)<br>
<a href="tracks_history.html">Los Angeles Laugh Tracks</a> (Matt Bruce)<br>
<br>
</td></tr></table>
</body></html>`;

// And tests for a group of tests on parsing data
describe('Data Parsing', function() {
  describe('tests parsing simbase main index page', function() {
    it('Able to parse the most recent year as string', async function() {
      let doc = await pd.parseIndexPage(simbaseIndexPage);
      assert.equal('Year 82', doc.currentYear);
    });

    it('Able to parse the most recent year as number', async function() {
      let doc = await pd.parseIndexPage(simbaseIndexPage);
      assert.equal(82, doc.currentYearNum);
    });

    it('Able to parse the 18 team history links', async function() {
      let doc = await pd.parseIndexPage(simbaseIndexPage);
      assert.equal(18, doc.teamHistoryLinks.length);
    });

    it('Able to parse the team history links and first one is right', async function() {
      let doc = await pd.parseIndexPage(simbaseIndexPage);
      assert.equal('avangard_history.html', doc.teamHistoryLinks[0]);
    });
  });
});
