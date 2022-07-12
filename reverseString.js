let revStr = "";

const reverseString = (str) => {
    str.split('');
    for (i =0; i < str.length; i++){
       revStr = str[i] + revStr
    }
    return revStr;
};
module.exports = reverseString;