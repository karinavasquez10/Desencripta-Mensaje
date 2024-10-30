function decryptMessage() {
    const encryptedMessage = document.getElementById("encryptedMessage").value;
    let decryptedMessage = "";


    const substitutions = {
  
        '__': 'z',
        '=-+%': 'github',
        '()': ' ',
        '¬': 'ó',
        '?': 'a',
        '[': 'e',
        '\\': 'i',
        '~': 'o',
        '+': 'u',
        '^': 'm',
        '`': 'c',
        '*': 'p',
        '/': 'l',
        '-': 'h',
        ']': 'n',
        '=': 't',
        '{': 's',
        '¿': 'y',
        '¡': 'd',
        ';': 'f',
        '$': 'r',  
        '%': 'b',
        '!': 'j',  
        '}': 'q',  
        '#': 'v'  
    };

 
    let i = 0;
    while (i < encryptedMessage.length) {
        let found = false;


        for (const key in substitutions) {
            if (encryptedMessage.startsWith(key, i)) {
                decryptedMessage += substitutions[key];
                i += key.length;
                found = true;
                break;
            }
        }


        if (!found) {
            decryptedMessage += encryptedMessage[i];
            i++;
        }
    }


    document.getElementById("decryptedMessage").innerText = "Mensaje descifrado: " + decryptedMessage;
}
