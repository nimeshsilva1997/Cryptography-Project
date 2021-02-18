var crypto = require("crypto");

const args = process.argv.slice(3);

// type = args[0];
type='modp1';
console.log("Type:\t",type);

var alice = crypto.getDiffieHellman(type);
var bob = crypto.getDiffieHellman(type);

alice.generateKeys();
bob.generateKeys();

console.log("Alice prime (p):",alice.getPrime().toString('hex'),"\nAlice generator (G):",alice.getGenerator().toString('hex'));


console.log("\nAlice private key:",alice.getPrivateKey().toString('hex'));
console.log("\nBob private key:",bob.getPrivateKey().toString('hex'));

console.log("\nAlice public key:",alice.getPublicKey().toString('hex'));
console.log("\nBob public key:",bob.getPublicKey().toString('hex'));


var alice_secret = alice.computeSecret(bob.getPublicKey(), null, 'hex');
var bob_secret = bob.computeSecret(alice.getPublicKey(), null, 'hex');

console.log("\nAlice secret:",alice_secret);
console.log("\nBob secret:",bob_secret);
