function findClosestResult(functionsObj, inputNumber, outputNumber){
    var closeKey = null;
    var closeDifference = Infinity;
    for(const key in functionsObj){
        if(functionsObj.hasOwnProperty(key)){
            const result = functionsObj[key](inputNumber);
            const difference = Math.abs(result - outputNumber);
            if(difference < closeDifference){
                closeDifference = difference;
                closeKey = key;
}}}

return closeKey;
}

const fObj = {};
fObj.multipleByEight = (x) => x * 8;
fObj.square = (x) => x * x;
fObj.addSixty = (x) => x + 60;

const result = findClosestResult(fObj, 5, 26);
console.log(result);
console.log(findClosestResult(fObj, 10, 5));
console.log(findClosestResult(fObj, 5, 45));