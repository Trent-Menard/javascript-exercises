const sumAll = function(startRange, endRange) {

    if ( !(typeof startRange === "number") || !(typeof endRange === "number"))
        return "ERROR";

    else if (startRange < 0 || endRange < 0)
            return "ERROR";

    let range = 0;
    let sum = 0;

    if (endRange > startRange){
        range = endRange - startRange;
        sum = startRange;
    }

    else if (endRange < startRange) {
        range = startRange - endRange
        sum = endRange;
    }

    for (let i = 0; i <= range; i++)
        sum += i + 1;

    return --sum;
};

// Do not edit below this line
module.exports = sumAll;
