const stringLength = (str) => {
    if (str.length > 1 && str.length <= 10){
        return str.length
    } else {
        return "Write a string between the length of 1 and 10"
    }
};
module.exports = stringLength;