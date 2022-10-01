var message = document.getElementById('msg').value;  
var key= '123456';
var iv = '1234567891011'

function enkrip(){

var encrypted = CryptoJS.AES.encrypt(message, key, { iv: iv, mode: CryptoJS.mode.CBC, });
    // var encrypted = CryptoJS.AES.encrypt(message, key);  
    alert(encrypted.toString());
    console.log(encrypted.toString());
    console.log(encrypted);
}

function dekrip(){
    var decrypted = CryptoJS.AES.decrypt(message, key, { iv: iv, mode: CryptoJS.mode.CBC, });
    alert(decrypted.toString(CryptoJS.enc.Utf8))
    console.log(decrypted.toString(CryptoJS.enc.Utf8));
}

const password = 'secure secret key'

const encrypt = (content, password) => CryptoJS.AES.encrypt(JSON.stringify({ content }), password).toString()
const decrypt = (crypted, password) => JSON.parse(CryptoJS.AES.decrypt(crypted, password).toString(CryptoJS.enc.Utf8)).content

// Encrypt
const encryptedString = encrypt('This is a string', password)
const encryptedObject = encrypt({ test: 'This is an object' }, password)
console.log(encryptedString)
console.log(encryptedObject)

// Decrypt
const decryptedString = decrypt(encryptedString, password)
const decryptedObject = decrypt(encryptedObject, password)
console.log(decryptedString)
console.log(decryptedObject)
