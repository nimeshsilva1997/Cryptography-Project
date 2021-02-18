// https://asecuritysite.com/encryption/js_merkle
var merkle = require('merkle');

const args = process.argv.slice(2);

// const str= args[0];

var str = 'Fred, Bert, Bill, Bob, Alice, Trent';
var arr = str.split(',');

console.log("Input:\t\t",arr);

var tree = merkle('sha1').sync(arr);

console.log("Root hash:\t",tree.root());
console.log("Tree depth\t",tree.depth());
console.log("Tree levels:\t",tree.levels());
console.log("Tree nodes:\t",tree.nodes());

var i;
for (i = 0; i < tree.levels(); i++) {
	console.log("\nLevel ",i);
	console.log(tree.level(i));
}
