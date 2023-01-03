const leapYears = function(int) {

if (int % 4 === 0 && int % 400 === 0 && int % 100 === 0) return true;
else if (int % 4 === 0 && int % 400 !== 0 && int % 100 === 0) return false;
else if (int % 4 === 0) return true;
else return false;






};

// Do not edit below this line
module.exports = leapYears;
