
const convertToCelsius = function(temp) {
  let fahr;
  fahr = ((temp - 32) * (5.0/9.0));
  fahr = parseFloat(fahr.toFixed(1));
  return fahr


};

const convertToFahrenheit = function(temp) {

  let sels;
  sels = ((temp * (9.0/5.0)) + 32);
  sels = parseFloat(sels.toFixed(1));
  return sels;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
