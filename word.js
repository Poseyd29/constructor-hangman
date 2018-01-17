var Letter = require("./letter.js")


function Word (word){
    this.word = word;
    this.wordArray = this.word.split('');
    this.wordLength = this.word.length;
    this.wordState = function () {
        var arr = this.wordArray;
        var letterArr = arr.map(function (val) {
            return new Letter(val)
        });
        return letterArr;

    }
    
}
module.exports = Word;





// var arr = [ 'c', 'l', 'i', 'p', 'p', 'e', 'r', 's' ];

// var mappedArr = arr.map(function (){
    
//     return "*";

// });
// console.log(mappedArr);