// code your solution here
function superbowlWin(record){
    const SBWin = record.find(obj => obj.result === "W");
    if (!!SBWin === true) {
        return SBWin.year
    } else {
        return undefined;
    }
}