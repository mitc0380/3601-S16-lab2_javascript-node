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
            num = 4;
            break;
        case "A+":
            num = 4;
            break;
        case "A-":
            num = 3.7;
            break;
        case "B+":
            num = 3.3;
            break;
        case "B":
            num = 3;
            break;
        case "C+":
            num = 2.3;
            break;
        case "B-":
            num = 2.7;
            break;
        case "C":
            num = 2;
            break;
        case "C-":
            num = 1.7;
            break;
        case "D+":
            num = 1.3;
            break;
        case "D":
            num = 1;
            break;
        default:
            num = 0;
            break;
    }
    return num;
};

exports.average = function(str){
    var mylength = 0;
    var total = 0;
    var temp = 0;
    while(str.length){
        console.log(temp+","+mylength+","+total);
        temp=str.pop();
        console.log(temp+","+mylength+","+total);
        mylength=mylength+temp;
        console.log(temp+","+mylength+","+total);
        total=total + temp*str.pop();
        console.log(temp+","+mylength+","+total);
        console.log("---------------");

    }
    return total/mylength;
};