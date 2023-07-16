const leapYears = function(year) {
    // Leap year = divisible by 4
        // Except those divisible by 100
            // Unless they're divisible by 400

    // if (div 4 and ! / 100) || ( / 4 && div 400)

    return ( (year % 4 === 0 && year % 100 !== 0) || (year % 4 === 0 && year % 400 === 0) );
};

// Do not edit below this line
module.exports = leapYears;
