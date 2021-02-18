function Generate_key() {
    	var i, j, k = "";
	
    	var i, j, k = "";
	
	addEntropyTime();
	var seed = keyFromEntropy();
	
    	var prng = new AESprng(seed);
	if (document.key.keytype[0].checked) {
	    //	Text key
	    var charA = ("A").charCodeAt(0);
	    
	    for (i = 0; i < 12; i++) {
		if (i > 0) {
	    	    k += "-";
		}
		for (j = 0; j < 5; j++) {
	    	    k += String.fromCharCode(charA + prng.nextInt(25));
		}
	    }
	} else {
	    // Hexadecimal key
	    var hexDigits = "0123456789ABCDEF";
	    
	    for (i = 0; i < 64; i++) {
	    	k += hexDigits.charAt(prng.nextInt(15));
	    }
	}
    	document.key.text.value = k;
	delete prng;
    }
    
    
