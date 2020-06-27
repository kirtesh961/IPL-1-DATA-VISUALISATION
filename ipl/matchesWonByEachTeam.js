function matchesWonByEachTeam(matches){
    const result = {};
    for (let match of matches) {
      if(result[match.winner]){
        if(result[match.winner][match.season]){
          result[match.winner][match.season]+=1;
        }else{
          result[match.winner][match.season]=1;
        }
      }else{
        result[match.winner]={};
        result[match.winner][match.season]=1;
      }
    }
    arr = [];
    for(let key in result){
      let temp = [];
      for(let team in result[key]){
        temp.push([team,result[key][team]]);
      }
      arr.push({name:key,data:temp});
    }
//   console.log("winning team",result);
    return result;
  }


module.exports = matchesWonByEachTeam ;