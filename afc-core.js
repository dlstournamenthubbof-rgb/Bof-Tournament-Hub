// ============================================================
// DLS TOURNAMENT HUB - AFC ASIAN CUP CORE
// FIREBASE REALTIME DATABASE - STABLE VERSION
// ============================================================

"use strict";

// ============================================================
// 1. FIREBASE CONFIG
// ============================================================

const firebaseConfig = {
  apiKey: "AIzaSyCnHshWzSIoBvQa4vD12GPAfoFQzQDIOk0",
  authDomain: "dls-tournament-hub-56554.firebaseapp.com",
  databaseURL: "https://dls-tournament-hub-56554-default-rtdb.firebaseio.com",
  projectId: "dls-tournament-hub-56554",
  storageBucket: "dls-tournament-hub-56554.firebasestorage.app",
  messagingSenderId: "256335621649",
  appId: "1:256335621649:web:ffadd371b0c902ffba4bb0",
  measurementId: "G-ESV9TP1FXQ"
};


// ============================================================
// 2. FIREBASE PATH
// ============================================================

const firebasePath = "afc_asian_cup";

let afcDatabase = null;
let firebaseReady = false;
let firebaseInitialized = false;


// ============================================================
// 3. TOURNAMENT DATA
// ============================================================

let tournamentData = {

  matches: [

    // ================= GROUP A =================

    {
      id: 1,
      stage: "Round 1",
      group: "Group A",
      home: "Australia",
      away: "Jordan",
      homeScore: "",
      awayScore: ""
    },

    {
      id: 2,
      stage: "Round 1",
      group: "Group A",
      home: "Iran",
      away: "Uzbekistan",
      homeScore: "",
      awayScore: ""
    },

    {
      id: 3,
      stage: "Round 2",
      group: "Group A",
      home: "Australia",
      away: "Iran",
      homeScore: "",
      awayScore: ""
    },

    {
      id: 4,
      stage: "Round 2",
      group: "Group A",
      home: "Jordan",
      away: "Uzbekistan",
      homeScore: "",
      awayScore: ""
    },

    {
      id: 5,
      stage: "Round 3",
      group: "Group A",
      home: "Australia",
      away: "Uzbekistan",
      homeScore: "",
      awayScore: ""
    },

    {
      id: 6,
      stage: "Round 3",
      group: "Group A",
      home: "Jordan",
      away: "Iran",
      homeScore: "",
      awayScore: ""
    },


    // ================= GROUP B =================

    {
      id: 7,
      stage: "Round 1",
      group: "Group B",
      home: "BANGLADESH",
      away: "Qatar",
      homeScore: "",
      awayScore: ""
    },

    {
      id: 8,
      stage: "Round 1",
      group: "Group B",
      home: "Oman",
      away: "United Arab Emirates (UAE)",
      homeScore: "",
      awayScore: ""
    },

    {
      id: 9,
      stage: "Round 2",
      group: "Group B",
      home: "BANGLADESH",
      away: "Oman",
      homeScore: "",
      awayScore: ""
    },

    {
      id: 10,
      stage: "Round 2",
      group: "Group B",
      home: "Qatar",
      away: "United Arab Emirates (UAE)",
      homeScore: "",
      awayScore: ""
    },

    {
      id: 11,
      stage: "Round 3",
      group: "Group B",
      home: "BANGLADESH",
      away: "United Arab Emirates (UAE)",
      homeScore: "",
      awayScore: ""
    },

    {
      id: 12,
      stage: "Round 3",
      group: "Group B",
      home: "Qatar",
      away: "Oman",
      homeScore: "",
      awayScore: ""
    },


    // ================= GROUP C =================

    {
      id: 13,
      stage: "Round 1",
      group: "Group C",
      home: "Bahrain",
      away: "Japan",
      homeScore: "",
      awayScore: ""
    },

    {
      id: 14,
      stage: "Round 1",
      group: "Group C",
      home: "Iraq",
      away: "Thailand",
      homeScore: "",
      awayScore: ""
    },

    {
      id: 15,
      stage: "Round 2",
      group: "Group C",
      home: "Bahrain",
      away: "Iraq",
      homeScore: "",
      awayScore: ""
    },

    {
      id: 16,
      stage: "Round 2",
      group: "Group C",
      home: "Japan",
      away: "Thailand",
      homeScore: "",
      awayScore: ""
    },

    {
      id: 17,
      stage: "Round 3",
      group: "Group C",
      home: "Bahrain",
      away: "Thailand",
      homeScore: "",
      awayScore: ""
    },

    {
      id: 18,
      stage: "Round 3",
      group: "Group C",
      home: "Japan",
      away: "Iraq",
      homeScore: "",
      awayScore: ""
    },


    // ================= GROUP D =================

    {
      id: 19,
      stage: "Round 1",
      group: "Group D",
      home: "Indonesia",
      away: "South Korea",
      homeScore: "",
      awayScore: ""
    },

    {
      id: 20,
      stage: "Round 1",
      group: "Group D",
      home: "Saudi Arabia",
      away: "Vietnam",
      homeScore: "",
      awayScore: ""
    },

    {
      id: 21,
      stage: "Round 2",
      group: "Group D",
      home: "Indonesia",
      away: "Saudi Arabia",
      homeScore: "",
      awayScore: ""
    },

    {
      id: 22,
      stage: "Round 2",
      group: "Group D",
      home: "South Korea",
      away: "Vietnam",
      homeScore: "",
      awayScore: ""
    },

    {
      id: 23,
      stage: "Round 3",
      group: "Group D",
      home: "Indonesia",
      away: "Vietnam",
      homeScore: "",
      awayScore: ""
    },

    {
      id: 24,
      stage: "Round 3",
      group: "Group D",
      home: "South Korea",
      away: "Saudi Arabia",
      homeScore: "",
      awayScore: ""
    },


    // ================= KNOCKOUT =================

    {
      id: 25,
      stage: "Quarter Final",
      group: "",
      home: "1A",
      away: "2B",
      homeScore: "",
      awayScore: ""
    },

    {
      id: 26,
      stage: "Quarter Final",
      group: "",
      home: "1C",
      away: "2D",
      homeScore: "",
      awayScore: ""
    },

    {
      id: 27,
      stage: "Quarter Final",
      group: "",
      home: "1B",
      away: "2A",
      homeScore: "",
      awayScore: ""
    },

    {
      id: 28,
      stage: "Quarter Final",
      group: "",
      home: "1D",
      away: "2C",
      homeScore: "",
      awayScore: ""
    },

    {
      id: 29,
      stage: "Semi Final",
      group: "",
      home: "Winner QF 1",
      away: "Winner QF 2",
      homeScore: "",
      awayScore: ""
    },

    {
      id: 30,
      stage: "Semi Final",
      group: "",
      home: "Winner QF 3",
      away: "Winner QF 4",
      homeScore: "",
      awayScore: ""
    },

    {
      id: 31,
      stage: "Third Place",
      group: "",
      home: "Loser SF 1",
      away: "Loser SF 2",
      homeScore: "",
      awayScore: ""
    },

    {
      id: 32,
      stage: "Final",
      group: "",
      home: "Winner SF 1",
      away: "Winner SF 2",
      homeScore: "",
      awayScore: ""
    }

  ]

};


// ============================================================
// 4. GROUP CONFIG
// ============================================================

const groupsConfig = {

  "Group A": [
    "Australia",
    "Iran",
    "Jordan",
    "Uzbekistan"
  ],

  "Group B": [
    "BANGLADESH",
    "Oman",
    "Qatar",
    "United Arab Emirates (UAE)"
  ],

  "Group C": [
    "Bahrain",
    "Iraq",
    "Japan",
    "Thailand"
  ],

  "Group D": [
    "Indonesia",
    "Saudi Arabia",
    "South Korea",
    "Vietnam"
  ]

};


// ============================================================
// 5. GLOBAL MATCH ARRAY
// ============================================================

let allMatches = tournamentData.matches;


// ============================================================
// 6. LOAD FIREBASE SDK
// ============================================================

function loadFirebaseSDK() {

  if (window.firebase) {

    initializeAFCFirebase();

    return;

  }


  const appScript =
    document.createElement("script");

  appScript.src =
    "https://www.gstatic.com/firebasejs/10.12.5/firebase-app-compat.js";

  appScript.onload = function () {

    const dbScript =
      document.createElement("script");

    dbScript.src =
      "https://www.gstatic.com/firebasejs/10.12.5/firebase-database-compat.js";

    dbScript.onload = function () {

      initializeAFCFirebase();

    };

    dbScript.onerror = function () {

      firebaseError(
        "Firebase Database SDK load failed."
      );

    };

    document.head.appendChild(dbScript);

  };


  appScript.onerror = function () {

    firebaseError(
      "Firebase App SDK load failed."
    );

  };


  document.head.appendChild(appScript);

}


// ============================================================
// 7. FIREBASE ERROR
// ============================================================

function firebaseError(message) {

  console.error(message);

  window.dispatchEvent(

    new CustomEvent(
      "afcFirebaseError",
      {
        detail: {
          message: message
        }
      }
    )

  );

}


// ============================================================
// 8. INITIALIZE FIREBASE
// ============================================================

function initializeAFCFirebase() {

  if (firebaseInitialized) return;

  if (!window.firebase) {

    firebaseError(
      "Firebase SDK is not available."
    );

    return;

  }


  try {

    if (!firebase.apps.length) {

      firebase.initializeApp(
        firebaseConfig
      );

    }


    afcDatabase =
      firebase.database();


    firebaseInitialized = true;


    console.log(
      "✅ AFC Firebase initialized."
    );


    startFirebaseRealtimeListener();

  }

  catch (error) {

    firebaseError(
      "Firebase initialization failed: " +
      error.message
    );

  }

}


// ============================================================
// 9. FIREBASE REALTIME LISTENER
// ============================================================

function startFirebaseRealtimeListener() {

  if (!afcDatabase) return;


  const ref =
    afcDatabase.ref(firebasePath);


  ref.on(

    "value",

    function(snapshot) {

      try {

        const data =
          snapshot.val();


        // --------------------------------
        // NO DATA
        // --------------------------------

        if (
          !data ||
          !data.matches
        ) {

          console.log(
            "AFC database empty. Uploading initial data..."
          );


          uploadInitialData();


          return;

        }


        // --------------------------------
        // READ MATCHES
        // --------------------------------

        let matches = [];


        if (
          Array.isArray(data.matches)
        ) {

          matches =
            data.matches.filter(Boolean);

        }

        else {

          matches =
            Object.keys(data.matches)
              .sort((a, b) => {

                return (
                  Number(a) -
                  Number(b)
                );

              })
              .map(key =>
                data.matches[key]
              )
              .filter(Boolean);

        }


        if (!matches.length) {

          console.warn(
            "Firebase matches array is empty."
          );

          return;

        }


        // --------------------------------
        // UPDATE GLOBAL DATA
        // --------------------------------

        tournamentData = {

          matches: matches

        };


        allMatches =
          tournamentData.matches;


        // --------------------------------
        // UPDATE KNOCKOUT
        // --------------------------------

        updateKnockoutTeams();


        firebaseReady = true;


        console.log(
          "✅ AFC matches loaded:",
          allMatches.length
        );


        // --------------------------------
        // SEND EVENT
        // --------------------------------

        window.dispatchEvent(

          new CustomEvent(
            "afcFirebaseReady",
            {
              detail: {
                matches: allMatches
              }
            }
          )

        );


        window.dispatchEvent(

          new CustomEvent(
            "afcFirebaseUpdated",
            {
              detail: {
                matches: allMatches
              }
            }
          )

        );


        // --------------------------------
        // REFRESH PAGE
        // --------------------------------

        refreshCurrentPage();

      }

      catch (error) {

        console.error(
          "Firebase data processing error:",
          error
        );

      }

    },

    function(error) {

      firebaseError(
        "Firebase read error: " +
        error.message
      );

    }

  );

}


// ============================================================
// 10. INITIAL DATA UPLOAD
// ============================================================

function uploadInitialData() {

  if (!afcDatabase) return;


  afcDatabase
    .ref(firebasePath)
    .set({

      matches:
        tournamentData.matches

    })

    .then(function() {

      firebaseReady = true;

      console.log(
        "✅ Initial AFC data uploaded."
      );

    })

    .catch(function(error) {

      firebaseError(
        "Initial Firebase upload failed: " +
        error.message
      );

    });

}


// ============================================================
// 11. SAVE SCORE TO FIREBASE
// ============================================================

function saveToStorage() {

  if (!afcDatabase) {

    return Promise.reject(
      new Error(
        "Firebase is not connected yet."
      )
    );

  }


  updateKnockoutTeams();


  const data = {

    matches:
      tournamentData.matches

  };


  return afcDatabase

    .ref(firebasePath)

    .set(data)

    .then(function() {

      allMatches =
        tournamentData.matches;


      firebaseReady = true;


      console.log(
        "✅ Score saved to Firebase."
      );


      window.dispatchEvent(

        new CustomEvent(
          "afcFirebaseUpdated",
          {
            detail: {
              matches: allMatches
            }
          }
        )

      );


      refreshCurrentPage();


      return true;

    })

    .catch(function(error) {

      console.error(
        "❌ Firebase save error:",
        error
      );


      firebaseError(
        "Firebase save failed: " +
        error.message
      );


      throw error;

    });

}


// ============================================================
// 12. LOAD FROM STORAGE
// ============================================================

function loadFromStorage() {

  if (
    !firebaseInitialized
  ) {

    loadFirebaseSDK();

  }

}


// ============================================================
// 13. KNOCKOUT LOGIC
// ============================================================

function updateKnockoutTeams() {

  const standings = {};


  Object.keys(groupsConfig)
    .forEach(function(group) {

      standings[group] = {};


      groupsConfig[group]
        .forEach(function(team) {

          standings[group][team] = {

            played: 0,
            won: 0,
            drawn: 0,
            lost: 0,
            gf: 0,
            ga: 0,
            gd: 0,
            pts: 0

          };

        });

    });


  // --------------------------------
  // CALCULATE GROUP TABLE
  // --------------------------------

  tournamentData.matches
    .forEach(function(match) {

      if (
        !match.group ||
        !standings[match.group] ||
        match.homeScore === "" ||
        match.awayScore === "" ||
        isNaN