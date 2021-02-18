String.prototype.getBytes = function () {
  var bytes = [];
  for (var i = 0; i < this.length; ++i) {
    bytes.push(this.charCodeAt(i));
  }
  return bytes;
};

var m="hello";

var EdDSA = require('elliptic').eddsa;

var ec = new EdDSA('ed25519');

var key = ec.genKeyPair();
var publicKey = key.getPublic(false);

console.log("Message:",m);
console.log("\nPrivate key:",key);
console.log("\nPublic key:",publicKey);

var msgHash = m.getBytes();

var signature = key.sign(msgHash);

console.log("\nSignature:",signature);
// Export DER encoded signature in Array
var derSign = signature.toDER();

// console.log(derSign);

// Verify signature
console.log("Signature verified:",key.verify(msgHash, derSign));
