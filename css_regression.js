const regression = require('regression');

//--------- userNameWidth -------//
// The x is the element relative width, in what ever weird units Blessed uses.
// The y is the the width of the username that I set by hand.
// Graphing it shows that it is approximately logarithmic.
const data = [[270,130],[158,140],[118,160],[60,340]];

// use regression-js to find the closest log function.
const result = regression('logarithmic', data);

console.log(result);

//------- charLim ------------//
const data2 = [[270, 193], [133,83], [104, 61], [53, 26]];

const result2 = regression('linear', data2);

console.log(result2);
