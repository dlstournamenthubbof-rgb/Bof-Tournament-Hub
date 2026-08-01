const storageKey = 'fifa_2026_tournament_data';

const defaultTournament = {
  teams: [
    // Group A
    "Argentina", "Italy", "Mexico", "Canada",
    // Group B
    "Brazil", "Germany", "France", "Spain",
    // Group C
    "England", "Portugal", "Netherlands", "Belgium",
    // Group D
    "Croatia", "Uruguay", "Denmark", "Switzerland",
    // Group E
    "USA", "Colombia", "Japan", "Senegal",
    // Group F
    "South Korea", "Morocco", "Cameroon", "Poland",
    // Group G
    "Sweden", "Austria", "Ukraine", "Serbia",
    // Group H
    "Turkey", "Norway", "Scotland", "Ecuador"
  ],
  matches: [
    // --- ROUND 1 ---
    { id: 1, stage: "Round 1", group: "Group A", home: "Argentina", away: "Italy", homeScore: "", awayScore: "" },
    { id: 2, stage: "Round 1", group: "Group A", home: "Mexico", away: "Canada", homeScore: "", awayScore: "" },
    { id: 3, stage: "Round 1", group: "Group B", home: "Brazil", away: "Germany", homeScore: "", awayScore: "" },
    { id: 4, stage: "Round 1", group: "Group B", home: "France", away: "Spain", homeScore: "", awayScore: "" },
    { id: 5, stage: "Round 1", group: "Group C", home: "England", away: "Portugal", homeScore: "", awayScore: "" },
    { id: 6, stage: "Round 1", group: "Group C", home: "Netherlands", away: "Belgium", homeScore: "", awayScore: "" },
    { id: 7, stage: "Round 1", group: "Group D", home: "Croatia", away: "Uruguay", homeScore: "", awayScore: "" },
    { id: 8, stage: "Round 1", group: "Group D", home: "Denmark", away: "Switzerland", homeScore: "", awayScore: "" },
    { id: 9, stage: "Round 1", group: "Group E", home: "USA", away: "Colombia", homeScore: "", awayScore: "" },
    { id: 10, stage: "Round 1", group: "Group E", home: "Japan", away: "Senegal", homeScore: "", awayScore: "" },
    { id: 11, stage: "Round 1", group: "Group F", home: "South Korea", away: "Morocco", homeScore: "", awayScore: "" },
    { id: 12, stage: "Round 1", group: "Group F", home: "Cameroon", away: "Poland", homeScore: "", awayScore: "" },
    { id: 13, stage: "Round 1", group: "Group G", home: "Sweden", away: "Austria", homeScore: "", awayScore: "" },
    { id: 14, stage: "Round 1", group: "Group G", home: "Ukraine", away: "Serbia", homeScore: "", awayScore: "" },
    { id: 15, stage: "Round 1", group: "Group H", home: "Turkey", away: "Norway", homeScore: "", awayScore: "" },
    { id: 16, stage: "Round 1", group: "Group H", home: "Scotland", away: "Ecuador", homeScore: "", awayScore: "" },

    // --- ROUND 2 ---
    { id: 17, stage: "Round 2", group: "Group A", home: "Argentina", away: "Mexico", homeScore: "", awayScore: "" },
    { id: 18, stage: "Round 2", group: "Group A", home: "Italy", away: "Canada", homeScore: "", awayScore: "" },
    { id: 19, stage: "Round 2", group: "Group B", home: "Brazil", away: "France", homeScore: "", awayScore: "" },
    { id: 20, stage: "Round 2", group: "Group B", home: "Germany", away: "Spain", homeScore: "", awayScore: "" },
    { id: 21, stage: "Round 2", group: "Group C", home: "England", away: "Netherlands", homeScore: "", awayScore: "" },
    { id: 22, stage: "Round 2", group: "Group C", home: "Portugal", away: "Belgium", homeScore: "", awayScore: "" },
    { id: 23, stage: "Round 2", group: "Group D", home: "Croatia", away: "Denmark", homeScore: "", awayScore: "" },
    { id: 24, stage: "Round 2", group: "Group D", home: "Uruguay", away: "Switzerland", homeScore: "", awayScore: "" },
    { id: 25, stage: "Round 2", group: "Group E", home: "USA", away: "Japan", homeScore: "", awayScore: "" },
    { id: 26, stage: "Round 2", group: "Group E", home: "Colombia", away: "Senegal", homeScore: "", awayScore: "" },
    { id: 27, stage: "Round 2", group: "Group F", home: "South Korea", away: "Cameroon", homeScore: "", awayScore: "" },
    { id: 28, stage: "Round 2", group: "Group F", home: "Morocco", away: "Poland", homeScore: "", awayScore: "" },
    { id: 29, stage: "Round 2", group: "Group G", home: "Sweden", away: "Ukraine", homeScore: "", awayScore: "" },
    { id: 30, stage: "Round 2", group: "Group G", home: "Austria", away: "Serbia", homeScore: "", awayScore: "" },
    { id: 31, stage: "Round 2", group: "Group H", home: "Turkey", away: "Scotland", homeScore: "", awayScore: "" },
    { id: 32, stage: "Round 2", group: "Group H", home: "Norway", away: "Ecuador", homeScore: "", awayScore: "" },

    // --- ROUND 3 ---
    { id: 33, stage: "Round 3", group: "Group A", home: "Argentina", away: "Canada", homeScore: "", awayScore: "" },
    { id: 34, stage: "Round 3", group: "Group A", home: "Italy", away: "Mexico", homeScore: "", awayScore: "" },
    { id: 35, stage: "Round 3", group: "Group B", home: "Brazil", away: "Spain", homeScore: "", awayScore: "" },
    { id: 36, stage: "Round 3", group: "Group B", home: "Germany", away: "France", homeScore: "", awayScore: "" },
    { id: 37, stage: "Round 3", group: "Group C", home: "England", away: "Belgium", homeScore: "", awayScore: "" },
    { id: 38, stage: "Round 3", group: "Group C", home: "Portugal", away: "Netherlands", homeScore: "", awayScore: "" },
    { id: 39, stage: "Round 3", group: "Group D", home: "Croatia", away: "Switzerland", homeScore: "", awayScore: "" },
    { id: 40, stage: "Round 3", group: "Group D", home: "Uruguay", away: "Denmark", homeScore: "", awayScore: "" },
    { id: 41, stage: "Round 3", group: "Group E", home: "USA", away: "Senegal", homeScore: "", awayScore: "" },
    { id: 42, stage: "Round 3", group: "Group E", home: "Colombia", away: "Japan", homeScore: "", awayScore: "" },
    { id: 43, stage: "Round 3", group: "Group F", home: "South Korea", away: "Poland", homeScore: "", awayScore: "" },
    { id: 44, stage: "Round 3", group: "Group F", home: "Morocco", away: "Cameroon", homeScore: "", awayScore: "" },
    { id: 45, stage: "Round 3", group: "Group G", home: "Sweden", away: "Serbia", homeScore: "", awayScore: "" },
    { id: 46, stage: "Round 3", group: "Group G", home: "Austria", away: "Ukraine", homeScore: "", awayScore: "" },
    { id: 47, stage: "Round 3", group: "Group H", home: "Turkey", away: "Ecuador", homeScore: "", awayScore: "" },
    { id: 48, stage: "Round 3", group: "Group H", home: "Norway", away: "Scotland", homeScore: "", awayScore: "" },

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