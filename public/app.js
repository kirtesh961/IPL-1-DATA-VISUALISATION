function fetchAndVisualizeData() {
  fetch("./data.json")
    .then(r => r.json())// extracting body data from raw data excluding all other meta data
    .then(visualizeData);
}

fetchAndVisualizeData();

function visualizeData(data) {
  visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);
  visualizeMatchesWonByEachTeam(data.matchesWonByEachTeam);
  visualizeExtraRunsConcededByEachTeam(data.extraRunsConcededByEachTeam);
  visualizeEconomicalBowler(data.economicalBowlers);
  visualizeStory(data.story)
  return;
}

function visualizeMatchesPlayedPerYear(matchesPlayedPerYear) {
  const seriesData = [];
  for (let year in matchesPlayedPerYear) {
    seriesData.push([year, matchesPlayedPerYear[year]]);
    console.log(seriesData)
  }

  Highcharts.chart("matches-played-per-year", {
    chart: {
      type: "column"
    },
    title: {
      text: "1. Total Number of Matches Played Per Year"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      // min: 0,
      title: {
        text: "Matches"
      }
    },
    series: [
      {
        name: "Years",
        data: seriesData
      }
    ]
  });
}
function visualizeMatchesWonByEachTeam(matchesWonByEachTeam){
  //matchesWonByTeam = "Kings XI Punjab":{"2008":10,"2009":7,"2010":4,"2011":7,"2012":8,"2013":8,"2014":12,"2015":3,"2016":4,"2017":7,"2018":6,"2019":6},
  let seriesData = []; 
  for (let key in matchesWonByEachTeam) {

      let temp = []; // [year,matches_Won]
      if(key == ""){
        matchesWonByEachTeam[key] = matchesWonByEachTeam["no result"]
      }
      for(let team in matchesWonByEachTeam[key]){
          temp.push([team,matchesWonByEachTeam[key][team]]); // {name:'rsh',data:[[2018,13],[2019.10]]}
      }
      seriesData.push({name:key, data:temp})
  }
  
  Highcharts.chart("matches-won-by-each", {
    chart: {
      type: 'column'
    },
    title: {
      text: '2. Number of matches Won By Each Team Over All the Years of IPL'
    },
    xAxis: {
      type:"category",
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Matches Won'
      }
    },
    series: seriesData
  });
}
/*function  visualizeMatchesWonByEachTeam(matchesWonByEachTeam) {
  
  const seriesData = [];
  for(let key in matchesWonByEachTeam){
    let temp = [];
    for(let team in matchesWonByEachTeam[key]){
      temp.push([team,matchesWonByEachTeam[key][team]]);
    }
    // console.log("hello",temp)
    seriesData.push({name:key,data:temp});
  }
   console.log("series data",seriesData)
Highcharts.chart('matches-won-by-each', {
  chart: {
      type: 'column'
  },
  title: {
      text: '2. Number of matches Won By Each Team Over All the Years of IPL'
  },
  subtitle: {
      text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
  },
  xAxis: {
      categories:"category"
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Matches Won'
      }
  },
  series: seriesData
});
}*/

function visualizeExtraRunsConcededByEachTeam(extraRuns) {
  console.log(extraRuns)
  const seriesData = [];
  for (let team in extraRuns) {
    seriesData.push([team, extraRuns[team]]);
    console.log(seriesData)
  }

  Highcharts.chart("extra-runs", {
    chart: {
      type: "column"
    },
    title: {
      text: "3.Extra Runs Conceded by Each Team in 2016"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      // min: 0,
      title: {
        text: "Runs"
      }
    },
    series: [
      {
        name: "Teams",
        data: seriesData
      }
    ]
  });
}

function visualizeEconomicalBowler(economic) {
  console.log(economic);
  for(let i=0;i<economic.length;i++){
    economic[i][1]=parseFloat(economic[i][1]);
  }
  const seriesData = economic ;
  // const seriesData = [economic];
  // const seriesData = [];
  // for (let team in economic) {
  //   seriesData.push([bowler, economic[bowler]]);
  //   console.log(seriesData)
  // }

  Highcharts.chart("economy", {
    chart: {
      type: "column"
    },
    title: {
      text: "4.Top 10 Economical Bowler in 2015"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      // min: 0,
      title: {
        text: "Economy"
      }
    },
    series: [
      {
        name: "Bowlers",
        data: seriesData
      }
    ]
  });
}


function visualizeStory(data) {
  console.log(data);
  for(let i=0;i<data.length;i++){
    data[i][1]=parseInt(data[i][1]);
  }
  const seriesData = data ;

  Highcharts.chart("man-of-match", {
    chart: {
      type: "column"
    },
    title: {
      text: "5. Top 10 Man of the Match Players Over All the Years of IPL"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      // min: 0,
      title: {
        text: "Times Man Of the Match"
      }
    },
    series: [
      {
        name: "Players",
        data: seriesData
      }
    ]
  });
}