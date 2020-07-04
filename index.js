const fs = require("fs");
const csv = require("csvtojson");
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const matchesWonByEachTeam = require("./ipl/MatchesWonByEachTeam");
const extraRunsConcededByEachTeam = require("./ipl/extraRunsConcededByEachTeam");
const economicalBowlers = require("./ipl/economicalBowlers");
const story = require("./ipl/story");
const viratKohliRuns = require("./ipl/viratKohliRuns");
const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";
const JSON_OUTPUT_FILE_PATH = "./public/data.json";

function main() {
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      csv()
      .fromFile(DELIVERIES_FILE_PATH)
      .then(deleveries => {
      let result = matchesPlayedPerYear(matches);
      let result1 = matchesWonByEachTeam(matches);
      let result2 = extraRunsConcededByEachTeam(matches,deleveries);
      let result3 = economicalBowlers(matches,deleveries);
      let result4 = story(matches);
      let result5 = viratKohliRuns(matches,deleveries);
      saveData(result,result1, result2,result3, result4,result5);   
    });
})
}
function saveData(result,result1,result2,result3,result4,result5) {
  const jsonData = {
    matchesPlayedPerYear: result,
    matchesWonByEachTeam: result1,
    extraRunsConcededByEachTeam: result2,
    economicalBowlers: result3,
    story: result4,
    viratKohliRuns: result5
  };


  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}

main();
