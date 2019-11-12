var CryptoJS = require("crypto-js");
var IV = '8c4u55qpf8vdbr5s';
var KEY = '657v8b84tos7p703';
var key = CryptoJS.enc.Utf8.parse(KEY);// 秘钥
var iv =  CryptoJS.enc.Utf8.parse(IV);//向量iv
var option={
  iv: iv, 
  mode: CryptoJS.mode.CBC, 
  //padding: CryptoJS.pad.ZeroPadding 
  padding:CryptoJS.pad.Pkcs7
}
//aes加密
function Encrypt(data){
    var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), key,option).toString();//JSON.stringify可以将中文转成Unicode码
    return ciphertext;
}
//aes解密
function Decrypt(data){
    var bytes  = CryptoJS.AES.decrypt(data, key,option);
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    return eval("'" + originalText+ "'");//eval("'" + originalText+ "'")将Unicode码转成中文
}
module.exports={
    Encrypt:Encrypt,
    Decrypt:Decrypt
}