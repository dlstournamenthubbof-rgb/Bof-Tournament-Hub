const storageKey = "copa_tournament_data";

let defaultTournamentData = {
  matches: [
    // Group Stage - Round 1
    { id: 1, stage: "Round 1", group: "Group A", home: "Argentina", away: "Canada", homeScore: "", awayScore: "" },
    { id: 2, stage: "Round 1", group: "Group A", home: "Peru", away: "Chile", homeScore: "", awayScore: "" },
    { id: 3, stage: "Round 1", group: "Group B", home: "Mexico", away: "Jamaica", homeScore: "", awayScore: "" },
    { id: 4, stage: "Round 1", group: "Group B", home: "Ecuador", away: "Venezuela", homeScore: "", awayScore: "" },
    { id: 5, stage: "Round 1", group: "Group C", home: "United States", away: "Bolivia", homeScore: "", awayScore: "" },
    { id: 6, stage: "Round 1", group: "Group C", home: "Uruguay", away: "Panama", homeScore: "", awayScore: "" },
    { id: 7, stage: "Round 1", group: "Group D", home: "Brazil", away: "Costa Rica", homeScore: "", awayScore: "" },
    { id: 8, stage: "Round 1", group: "Group D", home: "Colombia", away: "Paraguay", homeScore: "", awayScore: "" },

    // Group Stage - Round 2
    { id: 9, stage: "Round 2", group: "Group A", home: "Peru", away: "Canada", homeScore: "", awayScore: "" },
    { id: 10, stage: "Round 2", group: "Group A", home: "Chile", away: "Argentina", homeScore: "", awayScore: "" },
    { id: 11, stage: "Round 2", group: "Group B", home: "Ecuador", away: "Jamaica", homeScore: "", awayScore: "" },
    { id: 12, stage: "Round 2", group: "Group B", home: "Venezuela", away: "Mexico", homeScore: "", awayScore: "" },
    { id: 13, stage: "Round 2", group: "Group C", home: "Panama", away: "United States", homeScore: "", awayScore: "" },
    { id: 14, stage: "Round 2", group: "Group C", home: "Uruguay", away: "Bolivia", homeScore: "", awayScore: "" },
    { id: 15, stage: "Round 2", group: "Group D", home: "Colombia", away: "Costa Rica", homeScore: "", awayScore: "" },
    { id: 16, stage: "Round 2", group: "Group D", home: "Paraguay", away: "Brazil", homeScore: "", awayScore: "" },

    // Group Stage - Round 3
    { id: 17, stage: "Round 3", group: "Group A", home: "Argentina", away: "Peru", homeScore: "", awayScore: "" },
    { id: 18, stage: "Round 3", group: "Group A", home: "Canada", away: "Chile", homeScore: "", awayScore: "" },
    { id: 19, stage: "Round 3", group: "Group B", home: "Mexico", away: "Ecuador", homeScore: "", awayScore: "" },
    { id: 20, stage: "Round 3", group: "Group B", home: "Jamaica", away: "Venezuela", homeScore: "", awayScore: "" },
    { id: 21, stage: "Round 3", group: "Group C", home: "United States", away: "Uruguay", homeScore: "", awayScore: "" },
    { id: 22, stage: "Round 3", group: "Group C", home: "Bolivia", away: "Panama", homeScore: "", awayScore: "" },
    { id: 23, stage: "Round 3", group: "Group D", home: "Brazil", away: "Colombia", homeScore: "", awayScore: "" },
    { id: 24, stage: "Round 3", group: "Group D", home: "Costa Rica", away: "Paraguay", homeScore: "", awayScore: "" },

    // Knockout Stage
    { id: 25, stage: "Quarter Final", group: "", home: "1A", away: "2B", homeScore: "", awayScore: "" },
    { id: 26, stage: "Quarter Final", group: "", home: "1B", away: "2A", homeScore: "", awayScore: "" },
    { id: 27, stage: "Quarter Final", group: "", home: "1C", away: "2D", homeScore: "", awayScore: "" },
    { id: 28, stage: "Quarter Final", group: "", home: "1D", away: "2C", homeScore: "", awayScore: "" },
    { id: 29, stage: "Semi Final", group: "", home: "Winner QF 1", away: "Winner QF 2", homeScore: "", awayScore: "" },
    { id: 30, stage: "Semi Final", group: "", home: "Winner QF 3", away: "Winner QF 4", homeScore: "", awayScore: "" },
    { id: 31, stage: "Third Place", group: "", home: "Loser SF 1", away: "Loser SF 2", homeScore: "", awayScore: "" },
    { id: 32, stage: "Final", group: "", home: "Winner SF 1", away: "Winner SF 2", homeScore: "", awayScore: "" }
  ]
};

const groupsConfig = {
  "Group A": ["Argentina", "Canada", "Chile", "Peru"],
  "Group B": ["Ecuador", "Jamaica", "Mexico", "Venezuela"],
  "Group C": ["Bolivia", "Panama", "United States", "Uruguay"],
  "Group D": ["Brazil", "Colombia", "Costa Rica", "Paraguay"]
};

let tournamentData;
let savedData = localStorage.getItem(storageKey);

if (savedData) {
  try {
    tournamentData = JSON.parse(savedData);
  } catch (e) {
    tournamentData = defaultTournamentData;
  }
} else {
  tournamentData = defaultTournamentData;
}

// পয়েন্ট টেবিল এবং নকআউট আপডেট করার লজিক
function updateKnockoutTeams() {
  let standings = {};
  Object.keys(groupsConfig).forEach(g => {
    standings[g] = {};
    groupsConfig[g].forEach(team => {
      standings[g][team] = { played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, pts: 0 };
    });
  });

  // গ্রুপ পর্বের ম্যাচ হিসাব
  tournamentData.matches.forEach(m => {
    if(m.group && standings[m.group] && m.homeScore !== "" && m.awayScore !== "" && !isNaN(m.homeScore) && !isNaN(m.awayScore)) {
      let hs = parseInt(m.homeScore);
      let as = parseInt(m.awayScore);
      let home = m.home;
      let away = m.away;

      if(standings[m.group][home] && standings[m.group][away]) {
        standings[m.group][home].played++;
        standings[m.group][away].played++;
        standings[m.group][home].gf += hs;
        standings[m.group][home].ga += as;
        standings[m.group][away].gf += as;
        standings[m.group][away].ga += hs;
        standings[m.group][home].gd = standings[m.group][home].gf - standings[m.group][home].ga;
        standings[m.group][away].gd = standings[m.group][away].gf - standings[m.group][away].ga;

        if(hs > as) {
          standings[m.group][home].won++;
          standings[m.group][home].pts += 3;
          standings[m.group][away].lost++;
        } else if(hs < as) {
          standings[m.group][away].won++;
          standings[m.group][away].pts += 3;
          standings[m.group][home].lost++;
        } else {
          standings[m.group][home].drawn++;
          standings[m.group][home].pts += 1;
          standings[m.group][away].drawn++;
          standings[m.group][away].pts += 1;
        }
      }
    }
  });

  let groupRankings = {};
  Object.keys(groupsConfig).forEach(g => {
    let sortedTeams = Object.keys(standings[g]).sort((a, b) => {
      let tA = standings[g][a];
      let tB = standings[g][b];
      if(tB.pts !== tA.pts) return tB.pts - tA.pts;
      if(tB.gd !== tA.gd) return tB.gd - tA.gd;
      return tB.gf - tA.gf;
    });

    let letter = g.replace("Group ", "");
    groupRankings[letter] = {
      1: sortedTeams[0] || ("1" + letter),
      2: sortedTeams[1] || ("2" + letter)
    };
  });

  let getMatch = (id) => tournamentData.matches.find(m => m.id === id);

  // ১. কোয়ার্টার ফাইনাল আপডেট (আপনার দেওয়া আইডি অনুযায়ী: ২৫, ২৬, ২৭, ২৮)
  let qf25 = getMatch(25), qf26 = getMatch(26), qf27 = getMatch(27), qf28 = getMatch(28);
  if(qf25) { qf25.home = groupRankings["A"][1]; qf25.away = groupRankings["B"][2]; }
  if(qf26) { qf26.home = groupRankings["B"][1]; qf26.away = groupRankings["A"][2]; }
  if(qf27) { qf27.home = groupRankings["C"][1]; qf27.away = groupRankings["D"][2]; }
  if(qf28) { qf28.home = groupRankings["D"][1]; qf28.away = groupRankings["C"][2]; }

  function getWinner(match) {
    if(!match || match.homeScore === "" || match.awayScore === "" || isNaN(match.homeScore) || isNaN(match.awayScore)) return null;
    let hs = parseInt(match.homeScore);
    let as = parseInt(match.awayScore);
    if(hs > as) return match.home;
    if(as > hs) return match.away;
    return null;
  }

  function getLoser(match) {
    if(!match || match.homeScore === "" || match.awayScore === "" || isNaN(match.homeScore) || isNaN(match.awayScore)) return null;
    let hs = parseInt(match.homeScore);
    let as = parseInt(match.awayScore);
    if(hs < as) return match.home;
    if(as < hs) return match.away;
    return null;
  }

  // ২. সেমিফাইনাল আপডেট (২৯ ও ৩০)
  let sf29 = getMatch(29), sf30 = getMatch(30);
  if(sf29) {
    sf29.home = getWinner(qf25) || "Winner QF 1";
    sf29.away = getWinner(qf26) || "Winner QF 2";
  }
  if(sf30) {
    sf30.home = getWinner(qf27) || "Winner QF 3";
    sf30.away = getWinner(qf28) || "Winner QF 4";
  }

  // ৩. তৃতীয় স্থান (৩১) ও ফাইনাল (৩২) আপডেট
  let third31 = getMatch(31), final32 = getMatch(32);
  if(third31) {
    third31.home = getLoser(sf29) || "Loser SF 1";
    third31.away = getLoser(sf30) || "Loser SF 2";
  }
  if(final32) {
    final32.home = getWinner(sf29) || "Winner SF 1";
    final32.away = getWinner(sf30) || "Winner SF 2";
  }
}

updateKnockoutTeams();

let allMatches = tournamentData.matches;

function saveToStorage() {
  localStorage.setItem(storageKey, JSON.stringify(tournamentData));
}
