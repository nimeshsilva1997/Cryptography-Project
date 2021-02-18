const Encryptor = require('node-fpe');


// const args = process.argv.slice(3);

// const message= args[0];
// const password= args[1];
// const dom= args[2].split('');

const message="432143256546544"
const password='qwerty'
const dom=[ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ]

console.log("Message:\t",message);
console.log("Password:\t",password);
console.log("Domain:\t\t",dom);

const encryptor = new Encryptor({ password: password,domain: dom, algorithm:'aes-256-cbc' });
 

var rtn=encryptor.encrypt(message)
console.log('\nCipher:\t\t',rtn);

 
rtn=encryptor.decrypt(rtn)
console.log('Decipher:\t',rtn);
