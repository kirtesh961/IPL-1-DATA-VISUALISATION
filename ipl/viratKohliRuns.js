
function viratKohliRuns(matches,deliveries){
    let total_run_by_match = {};
    for(let i of deliveries){
        if(i.batsman=='V Kohli'){
        if(total_run_by_match.hasOwnProperty(i.match_id)){
            total_run_by_match[i.match_id]+=parseInt(i.batsman_runs);
        }else{
            total_run_by_match[i.match_id]=parseInt(i.batsman_runs);
        }
      }
    }

    let years = {};
    for(let i of matches){
        if(total_run_by_match.hasOwnProperty(i.id)){
            if(years.hasOwnProperty(i['season'])){
                years[i['season']] +=  total_run_by_match[i.id]
            }else{
                years[i['season']] =  total_run_by_match[i.id]
            }
        }
    }
    let result = Object.entries(years)

    // console.log(years)
   return result;
}
module.exports = viratKohliRuns ;


