const convertToCelsius = function(tmp) {
  return Number( (5/9 * (tmp - 32)).toFixed(1) );
};

const convertToFahrenheit = function(tmp) {
  return Number( ((9/5 * tmp) + 32).toFixed(1) );
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
