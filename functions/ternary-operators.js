var value = 200

var one = ( value > 50 ) ? 'hello' : 'goodbye';
var two = ( value < 50 ) ? 'yes'   : 'no';
var three = ( one === 'hello' ) ? 5 : 10;
var four = ( three >= 10 ) ? 20 : 60;
var five = ( one > four ) ? 50 : 100;
var six = ( five + value * three > 100 ) ? 'xmas' : 'easter';

console.log( five + ' - ' + value + '  * ' + three );
console.log( five + value * three );
console.log( six );