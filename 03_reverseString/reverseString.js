const reverseString = function(word) {

    if (word === ""){
        return "";
    }

    word = word.slice()

    let reversed = '';
    for (let i = word.length -1; i != -1; i--){
        reversed += word[i];

    }
    return reversed;




};

// Do not edit below this line
module.exports = reverseString;
