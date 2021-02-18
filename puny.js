const punycode = require('punycode');
var unidecode = require('unidecode');

// const args = process.argv.slice(3);

// const message= args[0];
message='München'

console.log("Message:\t",unidecode(message));

rtn=punycode.encode(message);
console.log('Encode:\t\t',rtn);
rtn=punycode.decode(message);
console.log('Decode:\t\t',rtn);
