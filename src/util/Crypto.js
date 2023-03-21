import CryptoJS from 'crypto-js'
var iv = CryptoJS.enc.Utf8.parse('1234567812345678');
var cryptoObj = {
    /* 加密 */
    encryptFunc: (word) => {
        var srcs = CryptoJS.enc.Utf8.parse(word);//转为utf-8编码/密钥
		var encrypted = CryptoJS.AES.encrypt(srcs, iv, {
			mode : CryptoJS.mode.ECB,
			padding : CryptoJS.pad.Pkcs7
		});
		return encrypted.toString();
    },
    /* 解密 */
    decryptFunc: (word) => {
        var decrypt = CryptoJS.AES.decrypt(word, iv, {
			mode : CryptoJS.mode.ECB,
			padding : CryptoJS.pad.Pkcs7
		});
		return CryptoJS.enc.Utf8.stringify(decrypt).toString();
    },
}
export default cryptoObj;