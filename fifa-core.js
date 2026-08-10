const storageKey = 'fifa_2026_tournament_data';

const defaultTournament = {
  teams: [
    // Group A
    "Spain", "Argentina", "Uruguay", "Senegal",
    // Group B
    "France", "England", "Switzerland", "Italy",
    // Group C
    "Brazil", "Morocco", "USA", "Japan",
    // Group D
    "Portugal", "Belgium", "Norway", "Colombia",
    // Group E
    "Netherlands", "Mexico", "Germany", "Croatia",
    // Group F
    "Sweden", "Austria", "Ukraine", "Serbia",
    // Group G
    "Turkey", "Cameroon", "Poland", "Scotland",
    // Group H
    "Canada", "South Korea", "Denmark", "Ecuador"
  ],
  matches: [
    // --- ROUND 1 ---
    { id: 1, stage: "Round 1", group: "Group A", home: "Spain", away: "Argentina", homeScore: "", awayScore: "" },
    { id: 2, stage: "Round 1", group: "Group A", home: "Uruguay", away: "Senegal", homeScore: "", awayScore: "" },
    { id: 3, stage: "Round 1", group: "Group B", home: "France", away: "England", homeScore: "", awayScore: "" },
    { id: 4, stage: "Round 1", group: "Group B", home: "Switzerland", away: "Italy", homeScore: "", awayScore: "" },
    { id: 5, stage: "Round 1", group: "Group C", home: "Brazil", away: "Morocco", homeScore: "", awayScore: "" },
    { id: 6, stage: "Round 1", group: "Group C", home: "USA", away: "Japan", homeScore: "", awayScore: "" },
    { id: 7, stage: "Round 1", group: "Group D", home: "Portugal", away: "Belgium", homeScore: "", awayScore: "" },
    { id: 8, stage: "Round 1", group: "Group D", home: "Norway", away: "Colombia", homeScore: "", awayScore: "" },
    { id: 9, stage: "Round 1", group: "Group E", home: "Netherlands", away: "Mexico", homeScore: "", awayScore: "" },
    { id: 10, stage: "Round 1", group: "Group E", home: "Germany", away: "Croatia", homeScore: "", awayScore: "" },
    { id: 11, stage: "Round 1", group: "Group F", home: "Sweden", away: "Austria", homeScore: "", awayScore: "" },
    { id: 12, stage: "Round 1", group: "Group F", home: "Ukraine", away: "Serbia", homeScore: "", awayScore: "" },
    { id: 13, stage: "Round 1", group: "Group G", home: "Turkey", away: "Cameroon", homeScore: "", awayScore: "" },
    { id: 14, stage: "Round 1", group: "Group G", home: "Poland", away: "Scotland", homeScore: "", awayScore: "" },
    { id: 15, stage: "Round 1", group: "Group H", home: "Canada", away: "South Korea", homeScore: "", awayScore: "" },
    { id: 16, stage: "Round 1", group: "Group H", home: "Denmark", away: "Ecuador", homeScore: "", awayScore: "" },

    // --- ROUND 2 ---
    { id: 17, stage: "Round 2", group: "Group A", home: "Spain", away: "Uruguay", homeScore: "", awayScore: "" },
    { id: 18, stage: "Round 2", group: "Group A", home: "Argentina", away: "Senegal", homeScore: "", awayScore: "" },
    { id: 19, stage: "Round 2", group: "Group B", home: "France", away: "Switzerland", homeScore: "", awayScore: "" },
    { id: 20, stage: "Round 2", group: "Group B", home: "England", away: "Italy", homeScore: "", awayScore: "" },
    { id: 21, stage: "Round 2", group: "Group C", home: "Brazil", away: "USA", homeScore: "", awayScore: "" },
    { id: 22, stage: "Round 2", group: "Group C", home: "Morocco", away: "Japan", homeScore: "", awayScore: "" },
    { id: 23, stage: "Round 2", group: "Group D", home: "Portugal", away: "Norway", homeScore: "", awayScore: "" },
    { id: 24, stage: "Round 2", group: "Group D", home: "Belgium", away: "Colombia", homeScore: "", awayScore: "" },
    { id: 25, stage: "Round 2", group: "Group E", home: "Netherlands", away: "Germany", homeScore: "", awayScore: "" },
    { id: 26, stage: "Round 2", group: "Group E", home: "Mexico", away: "Croatia", homeScore: "", awayScore: "" },
    { id: 27, stage: "Round 2", group: "Group F", home: "Sweden", away: "Ukraine", homeScore: "", awayScore: "" },
    { id: 28, stage: "Round 2", group: "Group F", home: "Austria", away: "Serbia", homeScore: "", awayScore: "" },
    { id: 29, stage: "Round 2", group: "Group G", home: "Turkey", away: "Poland", homeScore: "", awayScore: "" },
    { id: 30, stage: "Round 2", group: "Group G", home: "Cameroon", away: "Scotland", homeScore: "", awayScore: "" },
    { id: 31, stage: "Round 2", group: "Group H", home: "Canada", away: "Denmark", homeScore: "", awayScore: "" },
    { id: 32, stage: "Round 2", group: "Group H", home: "South Korea", away: "Ecuador", homeScore: "", awayScore: "" },

    // --- ROUND 3 ---
    { id: 33, stage: "Round 3", group: "Group A", home: "Spain", away: "Senegal", homeScore: "", awayScore: "" },
    { id: 34, stage: "Round 3", group: "Group A", home: "Argentina", away: "Uruguay", homeScore: "", awayScore: "" },
    { id: 35, stage: "Round 3", group: "Group B", home: "France", away: "Italy", homeScore: "", awayScore: "" },
    { id: 36, stage: "Round 3", group: "Group B", home: "England", away: "Switzerland", homeScore: "", awayScore: "" },
    { id: 37, stage: "Round 3", group: "Group C", home: "Brazil", away: "Japan", homeScore: "", awayScore: "" },
    { id: 38, stage: "Round 3", group: "Group C", home: "Morocco", away: "USA", homeScore: "", awayScore: "" },
    { id: 39, stage: "Round 3", group: "Group D", home: "Portugal", away: "Colombia", homeScore: "", awayScore: "" },
    { id: 40, stage: "Round 3", group: "Group D", home: "Belgium", away: "Norway", homeScore: "", awayScore: "" },
    { id: 41, stage: "Round 3", group: "Group E", home: "Netherlands", away: "Croatia", homeScore: "", awayScore: "" },
    { id: 42, stage: "Round 3", group: "Group E", home: "Mexico", away: "Germany", homeScore: "", awayScore: "" },
    { id: 43, stage: "Round 3", group: "Group F", home: "Sweden", away: "Serbia", homeScore: "", awayScore: "" },
    { id: 44, stage: "Round 3", group: "Group F", home: "Austria", away: "Ukraine", homeScore: "", awayScore: "" },
    { id: 45, stage: "Round 3", group: "Group G", home: "Turkey", away: "Scotland", homeScore: "", awayScore: "" },
    { id: 46, stage: "Round 3", group: "Group G", home: "Cameroon", away: "Poland", homeScore: "", awayScore: "" },
    { id: 47, stage: "Round 3", group: "Group H", home: "Canada", away: "Ecuador", homeScore: "", awayScore: "" },
    { id: 48, stage: "Round 3", group: "Group H", home: "South Korea", away: "Denmark", homeScore: "", awayScore: "" },

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

    { id: 63, stage: "Third Place", home: "TBD", away: "TBD", homeScore: "", awayScore: "" },
    { id: 64, stage: "Final", home: "TBD", away: "TBD", homeScore: "", awayScore: "" }
  ]
};

let groupsDef = {
  "Group A": ["Spain", "Argentina", "Uruguay", "Senegal"],
  "Group B": ["France", "England", "Switzerland", "Italy"],
  "Group C": ["Brazil", "Morocco", "USA", "Japan"],
  "Group D": ["Portugal", "Belgium", "Norway", "Colombia"],
  "Group E": ["Netherlands", "Mexico", "Germany", "Croatia"],
  "Group F": ["Sweden", "Austria", "Ukraine", "Serbia"],
  "Group G": ["Turkey", "Cameroon", "Poland", "Scotland"],
  "Group H": ["Canada", "South Korea", "Denmark", "Ecuador"]
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

function getGroupTable(groupName) {
  let teamNames = groupsDef[groupName] || [];
  let allTable = getCalculatedTable();
  return allTable.filter(t => teamNames.includes(t.name));
}

function updateKnockoutDynamicTeams() {
  let groupA = getGroupTable("Group A");
  let groupB = getGroupTable("Group B");
  let groupC = getGroupTable("Group C");
  let groupD = getGroupTable("Group D");
  let groupE = getGroupTable("Group E");
  let groupF = getGroupTable("Group F");
  let groupG = getGroupTable("Group G");
  let groupH = getGroupTable("Group H");

  if(allMatches[48]) { allMatches[48].home = groupA[0]?.name || "A1"; allMatches[48].away = groupB[1]?.name || "B2"; }
  if(allMatches[49]) { allMatches[49].home = groupB[0]?.name || "B1"; allMatches[49].away = groupA[1]?.name || "A2"; }
  if(allMatches[50]) { allMatches[50].home = groupC[0]?.name || "C1"; allMatches[50].away = groupD[1]?.name || "D2"; }
  if(allMatches[51]) { allMatches[51].home = groupD[0]?.name || "D1"; allMatches[51].away = groupC[1]?.name || "C2"; }
  if(allMatches[52]) { allMatches[52].home = groupE[0]?.name || "E1"; allMatches[52].away = groupF[1]?.name || "F2"; }
  if(allMatches[53]) { allMatches[53].home = groupF[0]?.name || "F1"; allMatches[53].away = groupE[1]?.name || "E2"; }
  if(allMatches[54]) { allMatches[54].home = groupG[0]?.name || "G1"; allMatches[54].away = groupH[1]?.name || "H2"; }
  if(allMatches[55]) { allMatches[55].home = groupH[0]?.name || "H1"; allMatches[55].away = groupG[1]?.name || "G2"; }

  function getWinner(matchIdx, defaultName) {
    let m = allMatches[matchIdx];
    if(m && m.homeScore !== "" && m.homeScore !== undefined && m.awayScore !== "" && m.awayScore !== undefined) {
      let hs = parseInt(m.homeScore);
      let as = parseInt(m.awayScore);
      if(hs > as) return m.home;
      if(as > hs) return m.away;
    }
    return defaultName;
  }

  function getLoser(matchIdx, defaultName) {
    let m = allMatches[matchIdx];
    if(m && m.homeScore !== "" && m.homeScore !== undefined && m.awayScore !== "" && m.awayScore !== undefined) {
      let hs = parseInt(m.homeScore);
      let as = parseInt(m.awayScore);
      if(hs > as) return m.away;
      if(as > hs) return m.home;
    }
    return defaultName;
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

  // Third Place (Bronze Match) - সেমিফাইনালের হেরে যাওয়া দলদুটি
  let sf1L = getLoser(60, "Loser SF-1");
  let sf2L = getLoser(61, "Loser SF-2");
  if(allMatches[62]) {
    allMatches[62].home = sf1L;
    allMatches[62].away = sf2L;
  }

  // Final Match - সেমিফাইনালের জয়ী দলদুটি
  let final1 = getWinner(60, "Winner SF-1");
  let final2 = getWinner(61, "Winner SF-2");
  if(allMatches[63]) {
    allMatches[63].home = final1;
    allMatches[63].away = final2;
  }
}

updateKnockoutDynamicTeams();
