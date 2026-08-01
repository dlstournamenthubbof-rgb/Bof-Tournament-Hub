const storageKey = "premier_tournament_data_purple";

const eplTeams = [
  "Dhaka", "Chittagong", "Sylhet", "Rajshahi", "Khulna", 
  "Barisal", "Rangpur", "Mymensingh", "Comilla", "Gazipur", 
  "Narayanganj", "Feni", "Cox's Bazar", "Bogra", "Jessore", 
  "Dinajpur", "Pabna", "Noakhali", "Brahmanbaria", "Tangail"
];

// Round-Robin Generator for 20 teams (19 Rounds)
function generateEPLFixtures() {
  let teams = [...eplTeams];
  let matches = [];
  let matchId = 1;
  let numTeams = teams.length;
  let rounds = numTeams - 1;
  let half = numTeams / 2;

  let teamIndices = Array.from({length: numTeams}, (_, i) => i);

  for (let r = 0; r < rounds; r++) {
    let roundName = `Round ${r + 1}`;
    for (let i = 0; i < half; i++) {
      let homeIdx = teamIndices[i];
      let awayIdx = teamIndices[numTeams - 1 - i];
      
      let home = (r % 2 === 0) ? teams[homeIdx] : teams[awayIdx];
      let away = (r % 2 === 0) ? teams[awayIdx] : teams[homeIdx];

      matches.push({
        id: matchId++,
        stage: roundName,
        home: home,
        away: away,
        homeScore: "",
        awayScore: ""
      });
    }
    teamIndices.splice(1, 0, teamIndices.pop());
  }
  return matches;
}

let defaultTournamentData = {
  matches: generateEPLFixtures()
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
