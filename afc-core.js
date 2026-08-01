// Tournament Data Structure & Core Logic

let tournamentData = {
  matches: [
    // --- Group A ---
    { id: 1, stage: "Round 1", group: "GROUP A", home: "Australia", away: "Jordan", homeScore: "", awayScore: "" },
    { id: 2, stage: "Round 1", group: "GROUP A", home: "Iran", away: "Uzbekistan", homeScore: "", awayScore: "" },
    { id: 3, stage: "Round 2", group: "GROUP A", home: "Australia", away: "Iran", homeScore: "", awayScore: "" },
    { id: 4, stage: "Round 2", group: "GROUP A", home: "Jordan", away: "Uzbekistan", homeScore: "", awayScore: "" },
    { id: 5, stage: "Round 3", group: "GROUP A", home: "Australia", away: "Uzbekistan", homeScore: "", awayScore: "" },
    { id: 6, stage: "Round 3", group: "GROUP A", home: "Jordan", away: "Iran", homeScore: "", awayScore: "" },

    // --- Group B ---
    { id: 7, stage: "Round 1", group: "GROUP B", home: "BANGLADESH", away: "Qatar", homeScore: "", awayScore: "" },
    { id: 8, stage: "Round 1", group: "GROUP B", home: "Oman", away: "United Arab Emirates (UAE)", homeScore: "", awayScore: "" },
    { id: 9, stage: "Round 2", group: "GROUP B", home: "BANGLADESH", away: "Oman", homeScore: "", awayScore: "" },
    { id: 10, stage: "Round 2", group: "GROUP B", home: "Qatar", away: "United Arab Emirates (UAE)", homeScore: "", awayScore: "" },
    { id: 11, stage: "Round 3", group: "GROUP B", home: "BANGLADESH", away: "United Arab Emirates (UAE)", homeScore: "", awayScore: "" },
    { id: 12, stage: "Round 3", group: "GROUP B", home: "Qatar", away: "Oman", homeScore: "", awayScore: "" },

    // --- Group C ---
    { id: 13, stage: "Round 1", group: "GROUP C", home: "Bahrain", away: "Japan", homeScore: "", awayScore: "" },
    { id: 14, stage: "Round 1", group: "GROUP C", home: "Iraq", away: "Thailand", homeScore: "", awayScore: "" },
    { id: 15, stage: "Round 2", group: "GROUP C", home: "Bahrain", away: "Iraq", homeScore: "", awayScore: "" },
    { id: 16, stage: "Round 2", group: "GROUP C", home: "Japan", away: "Thailand", homeScore: "", awayScore: "" },
    { id: 17, stage: "Round 3", group: "GROUP C", home: "Bahrain", away: "Thailand", homeScore: "", awayScore: "" },
    { id: 18, stage: "Round 3", group: "GROUP C", home: "Japan", away: "Iraq", homeScore: "", awayScore: "" },

    // --- Group D ---
    { id: 19, stage: "Round 1", group: "GROUP D", home: "Indonesia", away: "South Korea", homeScore: "", awayScore: "" },
    { id: 20, stage: "Round 1", group: "GROUP D", home: "Saudi Arabia", away: "Vietnam", homeScore: "", awayScore: "" },
    { id: 21, stage: "Round 2", group: "GROUP D", home: "Indonesia", away: "Saudi Arabia", homeScore: "", awayScore: "" },
    { id: 22, stage: "Round 2", group: "GROUP D", home: "South Korea", away: "Vietnam", homeScore: "", awayScore: "" },
    { id: 23, stage: "Round 3", group: "GROUP D", home: "Indonesia", away: "Vietnam", homeScore: "", awayScore: "" },
    { id: 24, stage: "Round 3", group: "GROUP D", home: "South Korea", away: "Saudi Arabia", homeScore: "", awayScore: "" },

    // --- Knockouts ---
    { id: 25, stage: "Quarter Final", group: "", home: "1A", away: "2B", homeScore: "", awayScore: "" },
    { id: 26, stage: "Quarter Final", group: "", home: "1C", away: "2D", homeScore: "", awayScore: "" },
    { id: 27, stage: "Quarter Final", group: "", home: "1B", away: "2A", homeScore: "", awayScore: "" },
    { id: 28, stage: "Quarter Final", group: "", home: "1D", away: "2C", homeScore: "", awayScore: "" },

    { id: 29, stage: "Semi Final", group: "", home: "Winner QF 1", away: "Winner QF 2", homeScore: "", awayScore: "" },
    { id: 30, stage: "Semi Final", group: "", home: "Winner QF 3", away: "Winner QF 4", homeScore: "", awayScore: "" },

    { id: 31, stage: "Third Place", group: "", home: "Loser SF 1", away: "Loser SF 2", homeScore: "", awayScore: "" },
    { id: 32, stage: "Final", group: "", home: "Winner SF 1", away: "Winner SF 2", homeScore: "", awayScore: "" }
  ]
};

const groupsConfig = {
  "GROUP A": ["Australia", "Iran", "Jordan", "Uzbekistan"],
  "GROUP B": ["BANGLADESH", "Oman", "Qatar", "United Arab Emirates (UAE)"],
  "GROUP C": ["Bahrain", "Iraq", "Japan", "Thailand"],
  "GROUP D": ["Indonesia", "Saudi Arabia", "South Korea", "Vietnam"]
};

const storageKey = "afc_asian_cup_tournament_data_v1";

function loadFromStorage() {
  const savedData = localStorage.getItem(storageKey);
  if (savedData) {
    try {
      const parsed = JSON.parse(savedData);
      if (parsed && parsed.matches) {
        tournamentData = parsed;
      }
    } catch (e) {
      console.error("Error loading tournament data from storage", e);
    }
  }
}

function saveToStorage() {
  localStorage.setItem(storageKey, JSON.stringify(tournamentData));
}

// পয়েন্ট টেবিলের ভিত্তিতে নকআউট দলের নাম নির্ধারণ করার ফাংশন
function updateKnockoutTeams() {
  let standings = {};
  Object.keys(groupsConfig).forEach(g => {
    standings[g] = {};
    groupsConfig[g].forEach(team => {
      standings[g][team] = { played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, pts: 0 };
    });
  });

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

    let letter = g.replace("GROUP ", "");
    groupRankings[letter] = {
      1: sortedTeams[0] || ("1" + letter),
      2: sortedTeams[1] || ("2" + letter)
    };
  });

  // কোয়ার্টার ফাইনালের ম্যাচগুলোতে পয়েন্ট টেবিল অনুযায়ী পজিশন বসানো
  tournamentData.matches.forEach(m => {
    if (m.stage === "Quarter Final") {
      if (m.id === 25) { 
        m.home = groupRankings["A"][1]; 
        m.away = groupRankings["B"][2]; 
      }
      if (m.id === 26) { 
        m.home = groupRankings["C"][1]; 
        m.away = groupRankings["D"][2]; 
      }
      if (m.id === 27) { 
        m.home = groupRankings["B"][1]; 
        m.away = groupRankings["A"][2]; 
      }
      if (m.id === 28) { 
        m.home = groupRankings["D"][1]; 
        m.away = groupRankings["C"][2]; 
      }
    }
  });
}

loadFromStorage();
updateKnockoutTeams();
saveToStorage();

let allMatches = tournamentData.matches;
