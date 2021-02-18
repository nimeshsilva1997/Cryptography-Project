function Encrypt_text() {
	var v, i;
	var prefix = "#####  Encrypted:\n",
	    suffix = "#####  End encrypted message\n";

    	if (document.key.text.value.length == 0) {
	    alert("Please specify a key with which to encrypt the message.");
	    return;
	}
    	if (document.plain.text.value.length == 0) {
	    alert("No plain text to encrypt!  Please enter or paste plain text in the field above.");
	    return;
	}
    	document.cipher.text.value = "";
    	setKey();

	addEntropyTime();
    	prng = new AESprng(keyFromEntropy());
	var plaintext = encode_utf8(document.plain.text.value);

	//  Compute MD5 sum of message text and add to header

	md5_init();
	for (i = 0; i < plaintext.length; i++) {
	    md5_update(plaintext.charCodeAt(i));
	}
	md5_finish();
	var header = "";
	for (i = 0; i < digestBits.length; i++) {
	    header += String.fromCharCode(digestBits[i]);
	}

	//  Add message length in bytes to header

	i = plaintext.length;
	header += String.fromCharCode(i >>> 24);
	header += String.fromCharCode(i >>> 16);
	header += String.fromCharCode(i >>> 8);
	header += String.fromCharCode(i & 0xFF);

    	/*  The format of the actual message passed to rijndaelEncrypt
	    is:

	    	    Bytes   	Content
		     0-15   	MD5 signature of plaintext
		    16-19   	Length of plaintext, big-endian order
		    20-end  	Plaintext

	    Note that this message will be padded with zero bytes
	    to an integral number of AES blocks (blockSizeInBits / 8).
	    This does not include the initial vector for CBC
	    encryption, which is added internally by rijndaelEncrypt.

	*/

	var ct = rijndaelEncrypt(header + plaintext, key, "CBC");
    	if (document.plain.encoding[0].checked) {
	    v = armour_codegroup(ct);
	} else if (document.plain.encoding[1].checked) {
    	    v = armour_hex(ct);
	} else if (document.plain.encoding[2].checked) {
    	    v = armour_base64(ct);
	}
	document.cipher.text.value = prefix + v + suffix;
    	delete prng;
    }
