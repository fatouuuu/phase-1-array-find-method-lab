// code your solution here


function superbowlWin(record){
    let findWin =  record.find(isAWin)
    if(findWin == null) {
        return undefined;
    } else {
        return findWin.year
    }    
    

}

function isAWin(record) {
  return record.result=="W"
}



// function isAWin(record){
//     return record.result === 'W'
// }

// function superbowlWin(record){
//      let findWin = record.find(isAWin)
//     if  (findWin == null) {
//         return record.year
//     }
//     else {
//         return undefined
//     }
// }
    
// const findWin = record.find((record)=>{
//         if (record.result = 'W'){
//             return record.year
//         }
// })
