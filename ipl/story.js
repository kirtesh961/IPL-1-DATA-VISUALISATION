function story(matches){
  // console.log(matches);
  let players= {}; 
  for(let obj of matches){
    
    if(players.hasOwnProperty(obj['player_of_match'])){
      players[obj['player_of_match']] += 1;
    }else {
      players[obj['player_of_match']] = 1;
    }
    
  }

  let arr = Object.entries(players).sort((a,b) => b[1] - a[1]).slice(0,10)
  // console.log(arr);
return arr;    

}

module.exports = story ;
// main();