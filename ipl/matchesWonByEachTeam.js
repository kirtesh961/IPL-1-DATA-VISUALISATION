function matchesWonByEachTeam(matches){
    const result = {};
    for (let match of matches) {
      let winner = match[winner]
      let season = match[season]
      if(result[ winner]){
        if(result[winner][season]){
          result[winner][season]+=1;
        }else{
          result [winner][season]=1;
        }
      }else{
        result[winner]={};
        result [winner][season]=1;
      }
    }
    
    return result;
  }


module.exports = matchesWonByEachTeam ;