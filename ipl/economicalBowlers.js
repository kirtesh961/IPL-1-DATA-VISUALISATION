function economicalBowlers(matches, deleveries){
    let ids = matches.filter(id => id['season'] == "2015").map( matchId => matchId['id'] )
    // console.log(ids)

    let eco1 = {};
    for(let bowl of deleveries){
        if(ids.includes(bowl["match_id"])){
            if(eco1.hasOwnProperty(bowl['bowler'])){
                eco1[bowl['bowler']] += parseInt(bowl['total_runs'])
            }else{
                eco1[bowl['bowler']] = parseInt(bowl['total_runs'])
            }
        }
    }
    console.log(eco1)    
    let eco2 = {};       
    let currentOver = 0;
    for(let i of deleveries){
        if(ids.includes(i["match_id"])){            
            if(eco2.hasOwnProperty(i['bowler'])){
                if(currentOver != i['over']){
                eco2[i['bowler']] += 1;
                }
            }else {
                eco2[i['bowler']] = 1;
            }
            currentOver = i['over']
        }
        
}
    console.log(eco2)
    for(let name in eco1){
        // console.log(name,parseInt(eco1[name]))
        eco1[name] = (parseFloat(eco1[name] / eco2[name]))
        .toFixed(2);
        // var arr = Object.entries(eco1)
        // console.log(eco1)
    }
    // console.log(eco1)
    let arr =  Object.entries(eco1)
    let arr1 = arr.sort((a,b) => a[1] - b[1]).slice(0,10)

    // console.log(arr1)
    return arr1;
}

module.exports = economicalBowlers;