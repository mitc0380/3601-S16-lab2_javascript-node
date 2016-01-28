// Javascript for the SERVER side.

exports.stringLength = function(str){
    return str.length;
};

exports.double = function(str){
    return str + str;
};

exports.gradeToNumber = function(str){
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

exports.average = function(str){
    var total = 0;
    var length = str.length;
    while(str.length){
        total+=str.pop();
    }
    return total/length;
};

