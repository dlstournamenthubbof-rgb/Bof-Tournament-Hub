const storageKey = "afc_tournament_data";

let defaultTournamentData = {
  matches: [
    // Group Stage - Round 1
    { id: 1, stage: "Round 1", group: "Group A", home: "Australia", away: "Iran", homeScore: "", awayScore: "" },
    { id: 2, stage: "Round 1", group: "Group A", home: "Jordan", away: "Uzbekistan", homeScore: "", awayScore: "" },
    { id: 3, stage: "Round 1", group: "Group B", home: "Bangladesh", away: "Oman", homeScore: "", awayScore: "" },
    { id: 4, stage: "Round 1", group: "Group B", home: "Qatar", away: "United Arab Emirates (UAE)", homeScore: "", awayScore: "" },
    { id: 5, stage: "Round 1", group: "Group C", home: "Bahrain", away: "Iraq", homeScore: "", awayScore: "" },
    { id: 6, stage: "Round 1", group: "Group C", home: "Japan", away: "Thailand", homeScore: "", awayScore: "" },
    { id: 7, stage: "Round 1", group: "Group D", home: "Indonesia", away: "Saudi Arabia", homeScore: "", awayScore: "" },
    { id: 8, stage: "Round 1", group: "Group D", home: "South Korea", away: "Vietnam", homeScore: "", awayScore: "" },

    // Group Stage - Round 2
    { id: 9, stage: "Round 2", group: "Group A", home: "Iran", away: "Jordan", homeScore: "", awayScore: "" },
    { id: 10, stage: "Round 2", group: "Group A", home: "Uzbekistan", away: "Australia", homeScore: "", awayScore: "" },
    { id: 11, stage: "Round 2", group: "Group B", home: "Oman", away: "Qatar", homeScore: "", awayScore: "" },
    { id: 12, stage: "Round 2", group: "Group B", home: "United Arab Emirates (UAE)", away: "Bangladesh", homeScore: "", awayScore: "" },
    { id: 13, stage: "Round 2", group: "Group C", home: "Iraq", away: "Japan", homeScore: "", awayScore: "" },
    { id: 14, stage: "Round 2", group: "Group C", home: "Thailand", away: "Bahrain", homeScore: "", awayScore: "" },
    { id: 15, stage: "Round 2", group: "Group D", home: "Saudi Arabia", away: "South Korea", homeScore: "", awayScore: "" },
    { id: 16, stage: "Round 2", group: "Group D", home: "Vietnam", away: "Indonesia", homeScore: "", awayScore: "" },

    // Group Stage - Round 3
    { id: 17, stage: "Round 3", group: "Group A", home: "Australia", away: "Jordan", homeScore: "", awayScore: "" },
    { id: 18, stage: "Round 3", group: "Group A", home: "Uzbekistan", away: "Iran", homeScore: "", awayScore: "" },
    { id: 19, stage: "Round 3", group: "Group B", home: "Bangladesh", away: "Qatar", homeScore: "", awayScore: "" },
    { id: 20, stage: "Round 3", group: "Group B", home: "United Arab Emirates (UAE)", away: "Oman", homeScore: "", awayScore: "" },
    { id: 21, stage: "Round 3", group: "Group C", home: "Bahrain", away: "Japan", homeScore: "", awayScore: "" },
    { id: 22, stage: "Round 3", group: "Group C", home: "Thailand", away: "Iraq", homeScore: "", awayScore: "" },
    { id: 23, stage: "Round 3", group: "Group D", home: "Indonesia", away: "South Korea", homeScore: "", awayScore: "" },
    { id: 24, stage: "Round 3", group: "Group D", home: "Vietnam", away: "Saudi Arabia", homeScore: "", awayScore: "" },

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

let allMatches = tournamentData.matches;

function saveToStorage() {
  localStorage.setItem(storageKey, JSON.stringify(tournamentData));
}
