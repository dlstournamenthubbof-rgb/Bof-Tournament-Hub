const storageKey = 'uefa_2026_tournament_data';

const defaultTournament = {
  teams: [
    "Real Madrid", "Bayern Munich", "Galatasaray", "Copenhagen",
    "Manchester City", "Inter Milan", "Atletico Madrid", "Celtic",
    "Paris Saint-Germain", "Arsenal", "Borussia Dortmund", "AC Milan",
    "Barcelona", "Porto", "Shakhtar Donetsk", "Antwerp",
    "Lazio", "Feyenoord", "Red Star Belgrade", "Red Bull Salzburg",
    "RB Leipzig", "Young Boys", "Newcastle United", "Real Sociedad",
    "Manchester United", "PSV Eindhoven", "Lens", "Sevilla",
    "Napoli", "Braga", "Union Berlin", "Benfica"
  ],
  matches: [
    // --- GROUP A ---
    { id: 1, stage: "Round 1", group: "Group A", home: "Real Madrid", away: "Bayern Munich", homeScore: "", awayScore: "" },
    { id: 2, stage: "Round 1", group: "Group A", home: "Galatasaray", away: "Copenhagen", homeScore: "", awayScore: "" },
    { id: 3, stage: "Round 2", group: "Group A", home: "Real Madrid", away: "Galatasaray", homeScore: "", awayScore: "" },
    { id: 4, stage: "Round 2", group: "Group A", home: "Bayern Munich", away: "Copenhagen", homeScore: "", awayScore: "" },
    { id: 5, stage: "Round 3", group: "Group A", home: "Real Madrid", away: "Copenhagen", homeScore: "", awayScore: "" },
    { id: 6, stage: "Round 3", group: "Group A", home: "Bayern Munich", away: "Galatasaray", homeScore: "", awayScore: "" },

    // --- GROUP B ---
    { id: 7, stage: "Round 1", group: "Group B", home: "Manchester City", away: "Inter Milan", homeScore: "", awayScore: "" },
    { id: 8, stage: "Round 1", group: "Group B", home: "Atletico Madrid", away: "Celtic", homeScore: "", awayScore: "" },
    { id: 9, stage: "Round 2", group: "Group B", home: "Manchester City", away: "Atletico Madrid", homeScore: "", awayScore: "" },
    { id: 10, stage: "Round 2", group: "Group B", home: "Inter Milan", away: "Celtic", homeScore: "", awayScore: "" },
    { id: 11, stage: "Round 3", group: "Group B", home: "Manchester City", away: "Celtic", homeScore: "", awayScore: "" },
    { id: 12, stage: "Round 3", group: "Group B", home: "Inter Milan", away: "Atletico Madrid", homeScore: "", awayScore: "" },

    // --- GROUP C ---
    { id: 13, stage: "Round 1", group: "Group C", home: "Paris Saint-Germain", away: "Arsenal", homeScore: "", awayScore: "" },
    { id: 14, stage: "Round 1", group: "Group C", home: "Borussia Dortmund", away: "AC Milan", homeScore: "", awayScore: "" },
    { id: 15, stage: "Round 2", group: "Group C", home: "Paris Saint-Germain", away: "Borussia Dortmund", homeScore: "", awayScore: "" },
    { id: 16, stage: "Round 2", group: "Group C", home: "Arsenal", away: "AC Milan", homeScore: "", awayScore: "" },
    { id: 17, stage: "Round 3", group: "Group C", home: "Paris Saint-Germain", away: "AC Milan", homeScore: "", awayScore: "" },
    { id: 18, stage: "Round 3", group: "Group C", home: "Arsenal", away: "Borussia Dortmund", homeScore: "", awayScore: "" },

    // --- GROUP D ---
    { id: 19, stage: "Round 1", group: "Group D", home: "Barcelona", away: "Porto", homeScore: "", awayScore: "" },
    { id: 20, stage: "Round 1", group: "Group D", home: "Shakhtar Donetsk", away: "Antwerp", homeScore: "", awayScore: "" },
    { id: 21, stage: "Round 2", group: "Group D", home: "Barcelona", away: "Shakhtar Donetsk", homeScore: "", awayScore: "" },
    { id: 22, stage: "Round 2", group: "Group D", home: "Porto", away: "Antwerp", homeScore: "", awayScore: "" },
    { id: 23, stage: "Round 3", group: "Group D", home: "Barcelona", away: "Antwerp", homeScore: "", awayScore: "" },
    { id: 24, stage: "Round 3", group: "Group D", home: "Porto", away: "Shakhtar Donetsk", homeScore: "", awayScore: "" },

    // --- GROUP E ---
    { id: 25, stage: "Round 1", group: "Group E", home: "Lazio", away: "Feyenoord", homeScore: "", awayScore: "" },
    { id: 26, stage: "Round 1", group: "Group E", home: "Red Star Belgrade", away: "Red Bull Salzburg", homeScore: "", awayScore: "" },
    { id: 27, stage: "Round 2", group: "Group E", home: "Lazio", away: "Red Star Belgrade", homeScore: "", awayScore: "" },
    { id: 28, stage: "Round 2", group: "Group E", home: "Feyenoord", away: "Red Bull Salzburg", homeScore: "", awayScore: "" },
    { id: 29, stage: "Round 3", group: "Group E", home: "Lazio", away: "Red Bull Salzburg", homeScore: "", awayScore: "" },
    { id: 30, stage: "Round 3", group: "Group E", home: "Feyenoord", away: "Red Star Belgrade", homeScore: "", awayScore: "" },

    // --- GROUP F ---
    { id: 31, stage: "Round 1", group: "Group F", home: "RB Leipzig", away: "Young Boys", homeScore: "", awayScore: "" },
    { id: 32, stage: "Round 1", group: "Group F", home: "Newcastle United", away: "Real Sociedad", homeScore: "", awayScore: "" },
    { id: 33, stage: "Round 2", group: "Group F", home: "RB Leipzig", away: "Newcastle United", homeScore: "", awayScore: "" },
    { id: 34, stage: "Round 2", group: "Group F", home: "Young Boys", away: "Real Sociedad", homeScore: "", awayScore: "" },
    { id: 35, stage: "Round 3", group: "Group F", home: "RB Leipzig", away: "Real Sociedad", homeScore: "", awayScore: "" },
    { id: 36, stage: "Round 3", group: "Group F", home: "Young Boys", away: "Newcastle United", homeScore: "", awayScore: "" },

    // --- GROUP G ---
    { id: 37, stage: "Round 1", group: "Group G", home: "Manchester United", away: "PSV Eindhoven", homeScore: "", awayScore: "" },
    { id: 38, stage: "Round 1", group: "Group G", home: "Lens", away: "Sevilla", homeScore: "", awayScore: "" },
    { id: 39, stage: "Round 2", group: "Group G", home: "Manchester United", away: "Lens", homeScore: "", awayScore: "" },
    { id: 40, stage: "Round 2", group: "Group G", home: "PSV Eindhoven", away: "Sevilla", homeScore: "", awayScore: "" },
    { id: 41, stage: "Round 3", group: "Group G", home: "Manchester United", away: "Sevilla", homeScore: "", awayScore: "" },
    { id: 42, stage: "Round 3", group: "Group G", home: "PSV Eindhoven", away: "Lens", homeScore: "", awayScore: "" },

    // --- GROUP H ---
    { id: 43, stage: "Round 1", group: "Group H", home: "Napoli", away: "Braga", homeScore: "", awayScore: "" },
    { id: 44, stage: "Round 1", group: "Group H", home: "Union Berlin", away: "Benfica", homeScore: "", awayScore: "" },
    { id: 45, stage: "Round 2", group: "Group H", home: "Napoli", away: "Union Berlin", homeScore: "", awayScore: "" },
    { id: 46, stage: "Round 2", group: "Group H", home: "Braga", away: "Benfica", homeScore: "", awayScore: "" },
    { id: 47, stage: "Round 3", group: "Group H", home: "Napoli", away: "Benfica", homeScore: "", awayScore: "" },
    { id: 48, stage: "Round 3", group: "Group H", home: "Braga", away: "Union Berlin", homeScore: "", awayScore: "" },

    // Knockout Stage
    { id: 49, stage: "Round of 16", home: "TBD", away: "TBD", homeScore: "", awayScore: "" },
    { id: 50, stage: "Round of 16", home: "TBD", away: "TBD", homeScore: "", awayScore: "" },
    { id: 51, stage: "Round of 16", home: "TBD", away: "TBD", homeScore: "", awayScore: "" },
    { id: 52, stage: "Round of 16", home: "TBD", away: "TBD", homeScore: "", awayScore: "" },
    { id: 53, stage: "Round of 16", home: "TBD", away: "TBD", homeScore: "", awayScore: "" },
    { id: 54, stage: "Round of 16", home: "TBD", away: "TBD", homeScore: "", awayScore: "" },
    { id: 55, stage: "Round of 16", home: "TBD", away: "TBD", homeScore: "", awayScore: "" },
    { id: 56, stage: "Round of 16", home: "TBD", away: "TBD", homeScore: "", awayScore: "" },

    { id: 57, stage: "Quarter Final", home: "TBD", away: "TBD", homeScore: "", awayScore: "" },
    { id: 58, stage: "Quarter Final", home: "TBD", away: "TBD", homeScore: "", awayScore: "" },
    { id: 59, stage: "Quarter Final", home: "TBD", away: "TBD", homeScore: "", awayScore: "" },
    { id: 60, stage: "Quarter Final", home: "TBD", away: "TBD", homeScore: "", awayScore: "" },

    { id: 61, stage: "Semi Final", home: "TBD", away: "TBD", homeScore: "", awayScore: "" },
    { id: 62, stage: "Semi Final", home: "TBD", away: "TBD", homeScore: "", awayScore: "" },

    { id: 63, stage: "Final", home: "TBD", away: "TBD", homeScore: "", awayScore: "" }
  ]
};

let tournamentData = JSON.parse(localStorage.getItem(storageKey)) || defaultTournament;
let allMatches = tournamentData.matches;

function saveToStorage() {
  updateKnockoutDynamicTeams();
  localStorage.setItem(storageKey, JSON.stringify(tournamentData));
}

function getCalculatedTable() {
  let stats = {};
  tournamentData.teams.forEach(t => {
    stats[t] = { name: t, played: 0, win: 0, draw: 0, loss: 0, gf: 0, ga: 0, gd: 0, pts: 0 };
  });

  allMatches.forEach(m => {
    if ((m.stage === "Round 1" || m.stage === "Round 2" || m.stage === "Round 3") && m.homeScore !== "" && m.awayScore !== "") {
      let hs = parseInt(m.homeScore);
      let as = parseInt(m.awayScore);
      let h = m.home;
      let a = m.away;

      if (stats[h] && stats[a]) {
        stats[h].played++; stats[a].played++;
        stats[h].gf += hs; stats[h].ga += as;
        stats[a].gf += as; stats[a].ga += hs;

        if (hs > as) {
          stats[h].win++; stats[h].pts += 3;
          stats[a].loss++;
        } else if (hs < as) {
          stats[a].win++; stats[a].pts += 3;
          stats[h].loss++;
        } else {
          stats[h].draw++; stats[h].pts += 1;
          stats[a].draw++; stats[a].pts += 1;
        }
      }
    }
  });

  Object.keys(stats).forEach(t => {
    stats[t].gd = stats[t].gf - stats[t].ga;
  });

  return Object.values(stats).sort((x, y) => 
    y.pts - x.pts || y.gd - x.gd || y.gf - x.gf
  );
}

function updateKnockoutDynamicTeams() {
  let sortedTeams = getCalculatedTable();

  function getWinner(matchIdx, defaultName) {
    let m = allMatches[matchIdx];
    if(m && m.homeScore !== "" && m.awayScore !== "") {
      let hs = parseInt(m.homeScore);
      let as = parseInt(m.awayScore);
      if(hs > as) return m.home;
      if(as > hs) return m.away;
    }
    return defaultName;
  }

  for(let i = 0; i < 8; i++) {
    let matchIndex = 48 + i;
    if(allMatches[matchIndex]) {
      allMatches[matchIndex].home = sortedTeams[i * 2]?.name || `Team ${i*2 + 1}`;
      allMatches[matchIndex].away = sortedTeams[i * 2 + 1]?.name || `Team ${i*2 + 2}`;
    }
  }

  let qf1W = getWinner(48, "Winner R16-1");
  let qf2W = getWinner(49, "Winner R16-2");
  let qf3W = getWinner(50, "Winner R16-3");
  let qf4W = getWinner(51, "Winner R16-4");
  let qf5W = getWinner(52, "Winner R16-5");
  let qf6W = getWinner(53, "Winner R16-6");
  let qf7W = getWinner(54, "Winner R16-7");
  let qf8W = getWinner(55, "Winner R16-8");

  if(allMatches[56]) { allMatches[56].home = qf1W; allMatches[56].away = qf2W; }
  if(allMatches[57]) { allMatches[57].home = qf3W; allMatches[57].away = qf4W; }
  if(allMatches[58]) { allMatches[58].home = qf5W; allMatches[58].away = qf6W; }
  if(allMatches[59]) { allMatches[59].home = qf7W; allMatches[59].away = qf8W; }

  let sf1W = getWinner(56, "Winner QF-1");
  let sf2W = getWinner(57, "Winner QF-2");
  let sf3W = getWinner(58, "Winner QF-3");
  let sf4W = getWinner(59, "Winner QF-4");

  if(allMatches[60]) { allMatches[60].home = sf1W; allMatches[60].away = sf2W; }
  if(allMatches[61]) { allMatches[61].home = sf3W; allMatches[61].away = sf4W; }

  let final1 = getWinner(60, "Winner SF-1");
  let final2 = getWinner(61, "Winner SF-2");

  if(allMatches[62]) {
    allMatches[62].home = final1;
    allMatches[62].away = final2;
  }
}

updateKnockoutDynamicTeams();
