const sumAll = function(int1, int2) {
    if (int1 < 0 || int2 < 0){
        return "ERROR";
    }
    if (!Number.isInteger(int1) || !Number.isInteger(int2)) return "ERROR";
    if (int1 > int2){
        const temp = int1
        int1 = int2;
        int2 = temp;


    }
    let numsarr;
    for (i = int1; i < int2 + 1, i++;){
        numsarr += i;

    }
    return numsarr;

};

// Do not edit below this line
module.exports = sumAll;
