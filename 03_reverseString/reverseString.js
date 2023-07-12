const reverseString = function(string) {
    let strReversed = ""
    for (let i = string.length; i >= 0; i--)
        strReversed += string.charAt(i);
    return strReversed;
};

// Do not edit below this line
module.exports = reverseString;
