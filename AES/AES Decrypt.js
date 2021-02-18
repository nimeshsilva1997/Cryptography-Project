function Decrypt_text() {

        if (document.key.text.value.length == 0) {
            alert("Please specify a key with which to decrypt the message.");
            return;
        }
        if (document.cipher.text.value.length == 0) {
            alert("No cipher text to decrypt!  Please enter or paste cipher text in the field above.");
            return;
        }

        setKey();
        var ct = new Array(), kt;
        kt = determineArmourType(document.cipher.text.value);
        if (kt == 0) {
            ct = disarm_codegroup(document.cipher.text.value);
        } else if (kt == 1) {
            ct = disarm_hex(document.cipher.text.value);
        } else if (kt == 2) {
            ct = disarm_base64(document.cipher.text.value);
        }

        var result = rijndaelDecrypt(ct, key, "CBC");

        var header = result.slice(0, 20);
        result = result.slice(20);


        var dl = (header[16] << 24) | (header[17] << 16) | (header[18] << 8) | header[19];
        if ((dl < 0) || (dl > result.length)) {
            alert("Message (length " + result.length + ") truncated.  " +
                dl + " characters expected.");
            //	Try to sauve qui peut by setting length to entire message
            dl = result.length;
        }


        var i, plaintext = "";

        md5_init();
        for (i = 0; i < dl; i++) {
            plaintext += String.fromCharCode(result[i]);
            md5_update(result[i]);
        }
        md5_finish();

        for (i = 0; i < digestBits.length; i++) {
            if (digestBits[i] != header[i]) {
                alert("Message corrupted.  Checksum of decrypted message does not match.");
                break;
            }
        }


        document.plain2.text.value = decode_utf8(plaintext);
    }
