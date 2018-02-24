module.exports = function getZerosCount(number){

var n = 5, counter = 0;
while (n < number){
        counter += Math.floor(number/n);
        n *= 5;
}
    return  counter;
}