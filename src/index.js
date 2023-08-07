module.exports = function toReadable (number) {
  let str = number.toString();
    if (number == 0) {
        return "zero";
    }
    if (number <= 19) {
        return oneDecimal(number);
    } else if (str.length == 2 && number > 19) {
        if (oneDecimal(str[1]) != undefined) {
            return `${twoDecimal(str[0])} ${oneDecimal(str[1])}`;
        } else {
            return twoDecimal(str[0]);
        }
    } else {
        if (twoDecimal(str[1]) != undefined && oneDecimal(str[2]) != undefined) {
            return `${oneDecimal(str[0])} hundred ${twoDecimal(str[1])} ${oneDecimal(str[2])}`;
        } else if (twoDecimal(str[1]) != undefined && twoDecimal(str[2]) != undefined) {
            return `${oneDecimal(str[0])} hundred ${twoDecimal(str[1])} ${oneDecimal(str[2])}`;
        } else if (twoDecimal(str[1]) == undefined && twoDecimal(str[2]) != undefined) {
            return `${oneDecimal(str[0])} hundred ${oneDecimal(str[1] + str[2])}`;
        } else if (twoDecimal(str[1]) != undefined && twoDecimal(str[2]) == undefined) {
            return `${oneDecimal(str[0])} hundred ${twoDecimal(str[1])}`;
        } else if (oneDecimal(str[1] + str[2]) != undefined) {
            return `${oneDecimal(str[0])} hundred ${oneDecimal(str[1] + str[2])}`;
        } else {
            return `${oneDecimal(str[0])} hundred`;
        }
    }
}

function oneDecimal(num) {
    let x = +num;
    switch(x) {
        case 0:
            return ;
        case 1:
            return "one";
        case 2:
            return "two";
        case 3:
            return "three";
        case 4:
            return "four";
        case 5:
            return "five";
        case 6:
            return "six";
        case 7:
            return "seven";
        case 8:
            return "eight";
        case 9:
            return "nine";
        case 10:
            return "ten";
        case 11:
            return "eleven";
        case 12:
            return "twelve";
        case 13:
            return "thirteen";
        case 14:
            return "fourteen";
        case 15:
            return "fifteen";
        case 16:
            return "sixteen";
        case 17:
            return "seventeen";
        case 18:
            return "eighteen";
        case 19:
            return "nineteen";
    }
}

function twoDecimal(num) {
    switch(num) {
        case '2':
            return "twenty";
        case '3':
            return "thirty";
        case '4':
            return "forty";
        case '5':
            return "fifty";
        case '6':
            return "sixty";
        case '7':
            return "seventy";
        case '8':
            return "eighty";
        case '9':
            return "ninety";
    }
}