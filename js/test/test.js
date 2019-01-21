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
    it('test passing in parse function that always returns 1', async function() {
      assert.equal(1, await fd.getPage('http://www.simbase.org/', function() {return 1;}));
    });
  });
  describe('test failing to load things', function() {
    it('A failure to load with no error function returns -1', async function() {
      assert.equal(-1, await fd.getPage('https://httpstat.us/403', function() {return 1;}));
    });
    it('A failure to load with error function returns -2', async function() {
      assert.equal(-2, await fd.getPage('https://httpstat.us/403', function() {return 1;}, function() {return -2;}));
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

var simbaseYearIndexPage51 = `<html>
<body>
<!-- preface -->
<table>
<tr><td><a href='../year50/simbase.html'><< Year 50</a></td><td><a href='../index.html'>League homepage</a></td><td><a href='../year52/simbase.html'>Year 52 >></a></td></tr></table><p>
<!-- end preface -->
Year 51 has been completed.
<ul><li>World Series Champions: Seattle Angst
<li>Van Landingham Award: Jourdan Dunn (Milan)
<li>Most Valuable Player: Mark Itabashi (Cyberspace)
<li>Rookie of the Year: Johan Cruyff (Kratovo)
</ul><ul><li><a href="standings.html">Standings</a>
<li><a href="schedule.txt">Schedule</a>
<li><a href="playoffs.html">Playoffs</a>; Leaders: <a href="playoff-leaders-hit.html">Hitting</a>; <a href="playoff-leaders-pitch.html">Pitching</a>; <a href="playoff-leaders-field.html">Fielding</a>
<li>Leaders: <a href="leaders-hit.html">Hitting</a>; <a href="leaders-pitch.html">Pitching</a>; <a href="leaders-field.html">Fielding</a>
<li>Losers: <a href="losers-hit.html">Hitting</a>; <a href="losers-pitch.html">Pitching</a>; <a href="losers-field.html">Fielding</a>
<li>Sortable Stats: <a href="sortable.html#reg,0">Hitting</a>; <a href="sortable.html#reg,3">Pitching</a>; <a href="sortable.html#reg,7">Fielding</a>
<li><a href="team_stats.txt">Team Statistics</a>; <a href="pos_avg.txt">Positional Averages</a>; <a href="fielding_splits.txt">Fielding Splits</a> (for multi-position players)
<li><a href="replayer.html">Game Replayer</a>
<li><a href="waivers_roster.html">Waiver Wire</a>
<li><a href="draftpool.txt">Draft Pool</a>
<li><a href="draft_order.txt">Draft Order</a>
<li><a href="draftlog.html">Draft Log</a>
<li><a href="awards.txt">Awards</a>
<li><a href="allstar_ballot.txt">All-Star Candidates</a>
<li><a href="roy_ballot.txt">Rookie of the Year Candidates</a>
<li><a href="hof_ballot.html">Hall of Fame Ballot</a>
<li><a href="manager_mod.html">Change instructions (for owners)</a>
<li><a href="names.html">Change names and draft order (for owners)</a>
</ul><p>MacArthur Division: <ul>
<li><a href="bullets_home.html">Baltimore Bullets</a>  (Alex Lovejoy, alex dot lovejoy at gmail dot com, 1 moves used): <a href="bullets_roster.html">Roster</a>; <a href="bullets_stats.html">Statistics</a>; <a href="bullets_sched.html">Schedule</a>; <a href="bullets_spring.txt">Spring</a>
<li><a href="aztecs_home.html">Kratovo Aztecs</a> (Lev Polinsky, polinsky at gmail dot com, 4 moves used): <a href="aztecs_roster.html">Roster</a>; <a href="aztecs_stats.html">Statistics</a>; <a href="aztecs_sched.html">Schedule</a>; <a href="aztecs_spring.txt">Spring</a>; <a href="aztecs_playoff_stats.html">Playoffs</a>
<li><a href="magicians_home.html">Multiverse Magicians</a>  (Solomon Stein, solomon dot stein at gmail dot com, 7 moves used): <a href="magicians_roster.html">Roster</a>; <a href="magicians_stats.html">Statistics</a>; <a href="magicians_sched.html">Schedule</a>; <a href="magicians_spring.txt">Spring</a>
<li><a href="sprites_home.html">San Jose Sprites</a> (David Scotton, dscotton at gmail dot com, 1 moves used): <a href="sprites_roster.html">Roster</a>; <a href="sprites_stats.html">Statistics</a>; <a href="sprites_sched.html">Schedule</a>; <a href="sprites_spring.txt">Spring</a>; <a href="sprites_playoff_stats.html">Playoffs</a>
<li><a href="southpaws_home.html">Sao Paulo Southpaws</a>  (Chad Davis, chadalandavis at gmail dot com, 5 moves used): <a href="southpaws_roster.html">Roster</a>; <a href="southpaws_stats.html">Statistics</a>; <a href="southpaws_sched.html">Schedule</a>; <a href="southpaws_spring.txt">Spring</a>
<li><a href="angst_home.html">Seattle Angst</a> (Mike Develin, mdevelin at gmail dot com, 7 moves used): <a href="angst_roster.html">Roster</a>; <a href="angst_stats.html">Statistics</a>; <a href="angst_sched.html">Schedule</a>; <a href="angst_spring.txt">Spring</a>; <a href="angst_playoff_stats.html">Playoffs</a>
<li><a href="players_home.html">Stratford Players</a>  (Joon Pahk, joonpahk at gmail dot com, 3 moves used): <a href="players_roster.html">Roster</a>; <a href="players_stats.html">Statistics</a>; <a href="players_sched.html">Schedule</a>; <a href="players_spring.txt">Spring</a>
<li><a href="gridlock_home.html">Washington Gridlock</a>  (Steve Bahnaman, stevebahnaman at gmail dot com, 1 moves used): <a href="gridlock_roster.html">Roster</a>; <a href="gridlock_stats.html">Statistics</a>; <a href="gridlock_sched.html">Schedule</a>; <a href="gridlock_spring.txt">Spring</a>
</ul>
<p>Thor Division: <ul>
<li><a href="almosts_home.html">Almaty Almosts</a>  (Eric Mayefsky, bobbyoderek at gmail dot com, 0 moves used): <a href="almosts_roster.html">Roster</a>; <a href="almosts_stats.html">Statistics</a>; <a href="almosts_sched.html">Schedule</a>; <a href="almosts_spring.txt">Spring</a>
<li><a href="rappers_home.html">Compton Rappers</a> (Nathan Kaplan, nathanckaplan at gmail dot com, 7 moves used): <a href="rappers_roster.html">Roster</a>; <a href="rappers_stats.html">Statistics</a>; <a href="rappers_sched.html">Schedule</a>; <a href="rappers_spring.txt">Spring</a>; <a href="rappers_playoff_stats.html">Playoffs</a>
<li><a href="internet_home.html">Cyberspace Internet</a> (Michael Bodell, mbodell at gmail dot com, 7 moves used): <a href="internet_roster.html">Roster</a>; <a href="internet_stats.html">Statistics</a>; <a href="internet_sched.html">Schedule</a>; <a href="internet_spring.txt">Spring</a>; <a href="internet_playoff_stats.html">Playoffs</a>
<li><a href="chefs_home.html">Kansas City Chefs</a>  (Bobby Woods-Corwin, simbase at rwoodsco dot fastmail dot fm, 2 moves used): <a href="chefs_roster.html">Roster</a>; <a href="chefs_stats.html">Statistics</a>; <a href="chefs_sched.html">Schedule</a>; <a href="chefs_spring.txt">Spring</a>
<li><a href="tracks_home.html">Los Angeles Laugh Tracks</a>  (Matt Bruce, matt at naqt dot com, 4 moves used): <a href="tracks_roster.html">Roster</a>; <a href="tracks_stats.html">Statistics</a>; <a href="tracks_sched.html">Schedule</a>; <a href="tracks_spring.txt">Spring</a>
<li><a href="models_home.html">Milan Models</a> (Paul Lujan, plujan314 at gmail dot com, 6 moves used): <a href="models_roster.html">Roster</a>; <a href="models_stats.html">Statistics</a>; <a href="models_sched.html">Schedule</a>; <a href="models_spring.txt">Spring</a>; <a href="models_playoff_stats.html">Playoffs</a>
<li><a href="bears_home.html">Paddington Bears</a>  (Alex Saltman, saltman at gmail dot com, 4 moves used): <a href="bears_roster.html">Roster</a>; <a href="bears_stats.html">Statistics</a>; <a href="bears_sched.html">Schedule</a>; <a href="bears_spring.txt">Spring</a>
<li><a href="felidae_home.html">Philadelphia Felidae</a>  (Victor Chubukov, victor dot chubukov at gmail dot com, 1 moves used): <a href="felidae_roster.html">Roster</a>; <a href="felidae_stats.html">Statistics</a>; <a href="felidae_sched.html">Schedule</a>; <a href="felidae_spring.txt">Spring</a>
</ul>
<a href="../index.html">Back to simbasev3 main page</a>
</body></html>`;

var simbaseYearIndexPage81 = `<html>
<body>
<!-- preface -->
<table>
<tr><td><a href='../year80/simbase.html'><< Year 80</a></td><td><a href='../index.html'>League homepage</a></td><td><a href='../year82/simbase.html'>Year 82 >></a></td></tr></table><p>
<!-- end preface -->
Year 81 has been completed.
<ul><li>World Series Champions: Baltimore Bullets
<li>Van Landingham Award: David (Circus)
<li>Most Valuable Player: Hugo S?nchez M?rquez (Kratovo)
<li>Rookie of the Year: Cow Jumping Over the Moon (Paddington)
</ul><ul><li><a href="standings.html">Standings</a>
<li><a href="schedule.txt">Schedule</a>
<li><a href="playoffs.html">Playoffs</a>; Leaders: <a href="playoff-leaders-hit.html">Hitting</a>; <a href="playoff-leaders-pitch.html">Pitching</a>; <a href="playoff-leaders-field.html">Fielding</a>
<li>Leaders: <a href="leaders-hit.html">Hitting</a>; <a href="leaders-pitch.html">Pitching</a>; <a href="leaders-field.html">Fielding</a>
<li>Losers: <a href="losers-hit.html">Hitting</a>; <a href="losers-pitch.html">Pitching</a>; <a href="losers-field.html">Fielding</a>
<li>Sortable Stats: <a href="sortable.html#reg,0">Hitting</a>; <a href="sortable.html#reg,3">Pitching</a>; <a href="sortable.html#reg,7">Fielding</a>
<li><a href="team_stats.txt">Team Statistics</a>; <a href="pos_avg.txt">Positional Averages</a>; <a href="fielding_splits.txt">Fielding Splits</a> (for multi-position players)
<li><a href="replayer.html">Game Replayer</a>
<li><a href="waivers_roster.html">Waiver Wire</a>
<li><a href="draftpool.txt">Draft Pool</a>
<li><a href="draft_order.txt">Draft Order</a>
<li><a href="draftlog.html">Draft Log</a>
<li><a href="awards.txt">Awards</a>
<li><a href="allstar_ballot.txt">All-Star Candidates</a>
<li><a href="roy_ballot.txt">Rookie of the Year Candidates</a>
<li><a href="hof_ballot.html">Hall of Fame Ballot</a>
<li><a href="manager_mod.html">Change instructions (for owners)</a>
<li><a href="names.html">Change names and draft order (for owners)</a>
</ul><p>East Division: <ul>
<li><a href="oldones_home.html">Arkham Old Ones</a>  (Geoff Smith, geoff127 at gmail dot com, 3 moves used): <a href="oldones_roster.html">Roster</a>; <a href="oldones_stats.html">Statistics</a>; <a href="oldones_sched.html">Schedule</a>; <a href="oldones_spring.txt">Spring</a>
<li><a href="avangard_home.html">Avangard Omsk</a>  (Bobby Woods-Corwin, simbase at rwoodsco dot fastmail dot fm, 0 moves used): <a href="avangard_roster.html">Roster</a>; <a href="avangard_stats.html">Statistics</a>; <a href="avangard_sched.html">Schedule</a>; <a href="avangard_spring.txt">Spring</a>
<li><a href="bullets_home.html">Baltimore Bullets</a> (Alex Lovejoy, alex dot lovejoy at gmail dot com, 1 moves used): <a href="bullets_roster.html">Roster</a>; <a href="bullets_stats.html">Statistics</a>; <a href="bullets_sched.html">Schedule</a>; <a href="bullets_spring.txt">Spring</a>; <a href="bullets_playoff_stats.html">Playoffs</a>
<li><a href="blizzard_home.html">Columbus Blizzard</a>  (Tony Lefeld, alefeld at alumni dot nd dot edu, 0 moves used): <a href="blizzard_roster.html">Roster</a>; <a href="blizzard_stats.html">Statistics</a>; <a href="blizzard_sched.html">Schedule</a>; <a href="blizzard_spring.txt">Spring</a>
<li><a href="magicians_home.html">Multiverse Magicians</a>  (Solomon Stein, solomon dot stein at gmail dot com, 4 moves used): <a href="magicians_roster.html">Roster</a>; <a href="magicians_stats.html">Statistics</a>; <a href="magicians_sched.html">Schedule</a>; <a href="magicians_spring.txt">Spring</a>
<li><a href="southpaws_home.html">Sao Paulo Southpaws</a>  (Chad Davis, chadalandavis at gmail dot com, 2 moves used): <a href="southpaws_roster.html">Roster</a>; <a href="southpaws_stats.html">Statistics</a>; <a href="southpaws_sched.html">Schedule</a>; <a href="southpaws_spring.txt">Spring</a>
</ul>
<p>Eurasian Division: <ul>
<li><a href="circus_home.html">Flying Circus</a> (Igor Teper, iteper at gmail dot com, 9 moves used): <a href="circus_roster.html">Roster</a>; <a href="circus_stats.html">Statistics</a>; <a href="circus_sched.html">Schedule</a>; <a href="circus_spring.txt">Spring</a>; <a href="circus_playoff_stats.html">Playoffs</a>
<li><a href="aztecs_home.html">Kratovo Aztecs</a> (Lev Polinsky, polinsky at gmail dot com, 3 moves used): <a href="aztecs_roster.html">Roster</a>; <a href="aztecs_stats.html">Statistics</a>; <a href="aztecs_sched.html">Schedule</a>; <a href="aztecs_spring.txt">Spring</a>; <a href="aztecs_playoff_stats.html">Playoffs</a>
<li><a href="models_home.html">Milan Models</a>  (Paul Lujan, plujan314 at gmail dot com, 2 moves used): <a href="models_roster.html">Roster</a>; <a href="models_stats.html">Statistics</a>; <a href="models_sched.html">Schedule</a>; <a href="models_spring.txt">Spring</a>
<li><a href="bears_home.html">Paddington Bears</a>  (Alex Saltman, saltman at gmail dot com, 2 moves used): <a href="bears_roster.html">Roster</a>; <a href="bears_stats.html">Statistics</a>; <a href="bears_sched.html">Schedule</a>; <a href="bears_spring.txt">Spring</a>
<li><a href="players_home.html">Stratford Players</a>  (Joon Pahk, joonpahk at gmail dot com, 5 moves used): <a href="players_roster.html">Roster</a>; <a href="players_stats.html">Statistics</a>; <a href="players_sched.html">Schedule</a>; <a href="players_spring.txt">Spring</a>
<li><a href="tribe_home.html">Tel Aviv Tribe</a> (Laser Kaplan, laserkaplan at gmail dot com, 5 moves used): <a href="tribe_roster.html">Roster</a>; <a href="tribe_stats.html">Statistics</a>; <a href="tribe_sched.html">Schedule</a>; <a href="tribe_spring.txt">Spring</a>; <a href="tribe_playoff_stats.html">Playoffs</a>
</ul>
<p>West Division: <ul>
<li><a href="rappers_home.html">Compton Rappers</a> (Nathan Kaplan, nathanckaplan at gmail dot com, 6 moves used): <a href="rappers_roster.html">Roster</a>; <a href="rappers_stats.html">Statistics</a>; <a href="rappers_sched.html">Schedule</a>; <a href="rappers_spring.txt">Spring</a>; <a href="rappers_playoff_stats.html">Playoffs</a>
<li><a href="internet_home.html">Cyberspace Internet</a>  (Michael Bodell, mbodell at gmail dot com, 3 moves used): <a href="internet_roster.html">Roster</a>; <a href="internet_stats.html">Statistics</a>; <a href="internet_sched.html">Schedule</a>; <a href="internet_spring.txt">Spring</a>
<li><a href="stars_home.html">Hollywoo Stars and Celebrities</a>  (None, none, 4 moves used): <a href="stars_roster.html">Roster</a>; <a href="stars_stats.html">Statistics</a>; <a href="stars_sched.html">Schedule</a>; <a href="stars_spring.txt">Spring</a>
<li><a href="tracks_home.html">Los Angeles Laugh Tracks</a>  (Matt Bruce, matt dot bruce at gmail dot com, 5 moves used): <a href="tracks_roster.html">Roster</a>; <a href="tracks_stats.html">Statistics</a>; <a href="tracks_sched.html">Schedule</a>; <a href="tracks_spring.txt">Spring</a>
<li><a href="sexwales_home.html">San Jose Sexwales</a> (David Scotton, dscotton at gmail dot com, 3 moves used): <a href="sexwales_roster.html">Roster</a>; <a href="sexwales_stats.html">Statistics</a>; <a href="sexwales_sched.html">Schedule</a>; <a href="sexwales_spring.txt">Spring</a>; <a href="sexwales_playoff_stats.html">Playoffs</a>
<li><a href="angst_home.html">Seattle Angst</a>  (Mike Develin, mdevelin at gmail dot com, 6 moves used): <a href="angst_roster.html">Roster</a>; <a href="angst_stats.html">Statistics</a>; <a href="angst_sched.html">Schedule</a>; <a href="angst_spring.txt">Spring</a>
</ul>
<a href="../index.html">Back to simbasev3 main page</a>
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
    
    it('Able to parse the 82 years of simbase', async function() {
      let doc = await pd.parseIndexPage(simbaseIndexPage);
      assert.equal(82, doc.yearLinks.length);
    });

    it('Able to tell that the 4th year is in the right place', async function() {
      let doc = await pd.parseIndexPage(simbaseIndexPage);
      assert.equal('year4/simbase.html', doc.yearLinks[3]);
    });
  });

  describe('tests parsing simbase year index page', function() {
    describe('Year 51 tests', function() {
      it('Able to parse the home links and first of 16 links is bullets_home.html', async function() {
        let doc = await pd.parseYearIndexPage(simbaseYearIndexPage51);
        assert.equal('bullets_home.html', doc.homeLinks[0]);
        assert.equal(16, doc.homeLinks.length);
      });
      it('Able to parse the roster links and first of 16 links is bullets_roster.html', async function() {
        let doc = await pd.parseYearIndexPage(simbaseYearIndexPage51);
        assert.equal('bullets_roster.html', doc.rosterLinks[0]);
        assert.equal(16, doc.rosterLinks.length);
      });
      it('Able to parse the stats links and first of 16 links is bullets_stats.html', async function() {
        let doc = await pd.parseYearIndexPage(simbaseYearIndexPage51);
        assert.equal('bullets_stats.html', doc.statsLinks[0]);
        assert.equal(16, doc.statsLinks.length);
      });
      it('Able to parse the schedule links and first of 16 links is bullets_sched.html', async function() {
        let doc = await pd.parseYearIndexPage(simbaseYearIndexPage51);
        assert.equal('bullets_sched.html', doc.schedLinks[0]);
        assert.equal(16, doc.schedLinks.length);
      });
      it('Able to parse the spring links and first of 16 links is bullets_spring.txt', async function() {
        let doc = await pd.parseYearIndexPage(simbaseYearIndexPage51);
        assert.equal('bullets_spring.txt', doc.springLinks[0]);
        assert.equal(16, doc.springLinks.length);
      });
      it('Able to parse the playoff links and first of 6 links is aztec_playoff_stats.html', async function() {
        let doc = await pd.parseYearIndexPage(simbaseYearIndexPage51);
        assert.equal('aztecs_playoff_stats.html', doc.teamPlayoffLinks[0]);
        assert.equal(6, doc.teamPlayoffLinks.length);
      });
    });

    describe('Tests parsing year 81', function() {
      it('Able to parse the home links and first of 18 links is oldones_home.html', async function() {
        let doc = await pd.parseYearIndexPage(simbaseYearIndexPage81);
        assert.equal('oldones_home.html', doc.homeLinks[0]);
        assert.equal(18, doc.homeLinks.length);
      });
      it('Able to parse the roster links and first of 18 links is oldones_roster.html', async function() {
        let doc = await pd.parseYearIndexPage(simbaseYearIndexPage81);
        assert.equal('oldones_roster.html', doc.rosterLinks[0]);
        assert.equal(18, doc.rosterLinks.length);
      });
      it('Able to parse the stats links and first of 18 links is oldones_stats.html', async function() {
        let doc = await pd.parseYearIndexPage(simbaseYearIndexPage81);
        assert.equal('oldones_stats.html', doc.statsLinks[0]);
        assert.equal(18, doc.statsLinks.length);
      });
      it('Able to parse the schedule links and first of 18 links is oldones_sched.html', async function() {
        let doc = await pd.parseYearIndexPage(simbaseYearIndexPage81);
        assert.equal('oldones_sched.html', doc.schedLinks[0]);
        assert.equal(18, doc.schedLinks.length);
      });
      it('Able to parse the spring links and first of 18 links is oldones_spring.txt', async function() {
        let doc = await pd.parseYearIndexPage(simbaseYearIndexPage81);
        assert.equal('oldones_spring.txt', doc.springLinks[0]);
        assert.equal(18, doc.springLinks.length);
      });
      it('Able to parse the team playoff links and first of 6 links is bullets_playoff_stats.html', async function() {
        let doc = await pd.parseYearIndexPage(simbaseYearIndexPage81);
        assert.equal('bullets_playoff_stats.html', doc.teamPlayoffLinks[0]);
        assert.equal(6, doc.teamPlayoffLinks.length);
      });
    });
  });
});
