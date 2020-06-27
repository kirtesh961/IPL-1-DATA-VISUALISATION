function extraRunsConcededByEachTeam(matches,deliveries){
    let ids= matches.filter(teamId => teamId['season'] == "2016").map(teamId => teamId.id);
    
    let deliveries1 = {};

    for(let team of deliveries){
        if(ids.includes(team['match_id'])){
            if(deliveries1.hasOwnProperty(team['bowling_team'])){
            deliveries1[team['bowling_team']] += parseInt(team['extra_runs'])
}
        else {
            deliveries1[team['bowling_team']] = parseInt(team['extra_runs']);
        }
    }}
    console.log(deliveries1)
    return deliveries1;
}



module.exports = extraRunsConcededByEachTeam ;