const convertToCelsius = function(num) {
  // to round Math.round(n * 10)/10
  return Math.round(((num - 32) * (5.0/9.0)) * 10) / 10;
};

const convertToFahrenheit = function(num) {
  return Math.round((num * (9.0/5.0) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
