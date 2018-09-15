module.exports = function getZerosCount(number){
  var zeros = 0, multiplier = 5;
  while (number > multiplier){
    zeros += Math.floor(number / multiplier);
    multiplier *= 5;
  }
    return zeros;
}
