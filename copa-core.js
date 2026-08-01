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
