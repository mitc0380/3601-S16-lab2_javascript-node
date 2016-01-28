// Our javascript for the CLIENT side.
// This will run on the browser.

/**
 * Takes no arguments, and creates a javascript alert in the client's browser.
 */
var sendAlert = function(){
    alert("THIS IS AN ALERT!");
};

/**
 * Used for getting the length of a string. For example only, you won't likely need to use something like this...
 * DIFFERENT FROM THE stringLength function in the server side javascript!!!
 *
 * @param str  - the string to have its length returned
 * @returns {*}  - an integer, the length of the string
 */
var testStringLength = function(str){
    return str.length;
};


/**
 * Takes no arguments, returns the string "kittens"
 *
 * @returns {string}  - returns "kittens"
 */
var returnKittens = function(){
    return "kittens";
};

var double = function(str){
    return str + str;
};

var gradeToNumber = function(str){
    var num;
    switch (str){
        case "A":
            num = "4";
            break;
        case "A+":
            num = "4";
            break;
        case "A-":
            num = "3.7";
            break;
        case "B+":
            num = "3.3";
            break;
        case "B":
            num = "3";
            break;
        case "C+":
            num = "2.3";
            break;
        case "B-":
            num = "2.7";
            break;
        case "C":
            num = "2";
            break;
        case "C-":
            num = "1.7";
            break;
        case "D+":
            num = "1.3";
            break;
        case "D":
            num = "1";
            break;
        default:
            num = "0"
            break;
    }
    return num;
};

var average = function(str){
    var length = str.length;
    var total = str.pop();
    while(str.length){
        total+=str.pop();
    }
    return total/length;
};