const EthCrypto = require('eth-crypto');
const SolidityCli = require('solidity-cli');


// const args = process.argv.slice(3);

// const message= args[0];
var message='hello'
console.log("Message:\t",message);


const identity = EthCrypto.createIdentity();

console.log("\n-----Identity-------\n",identity);

const messageHash = EthCrypto.hash.keccak256(message);

console.log("\n-----Message Hash (Keccak)-------\n",messageHash);

  const signature = EthCrypto.sign(
      identity.privateKey, // privateKey
      messageHash // hash of message
  );

console.log("\n------Signature of message----\n",signature);

    const signer = EthCrypto.recover(
      signature,
      EthCrypto.hash.keccak256(message) // signed message hash
  );

console.log("\n------Extracting Signer from signature------\n",signer);


const rawTransaction = {
        from: identity.address, 
        to: '0x3fD91467C1dc509Ff146c617872f706771cFB80b',
        value: 1000000000000000000, 
        nonce: 0, 
        gasPrice: 5000000000,
        gasLimit: 21000 
    };

const serializedTx = EthCrypto.signTransaction(
        rawTransaction,
        identity.privateKey
    );

console.log("\n------Transaction-------\n",serializedTx);

//const receipt = web3.eth.sendSignedTransaction(serializedTx);
