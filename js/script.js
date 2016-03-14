function pronounceNumber(){
    var numberToPronounce = parseInt(document.getElementById("numberToPronounce").value);

    var resultString = toWords(numberToPronounce);

    resultString = capitalizeFirstCharacter(resultString.trim());
    resultString += ".";

    resultString = removeMultipleSpaces(resultString);

    var destinationElement = document.getElementById("numberInWordsEN");
    writeValueToInputField(destinationElement, resultString);

    resultString = toWordsMK(numberToPronounce);

    resultString = capitalizeFirstCharacter(resultString.trim());
    resultString += ".";

    resultString = removeMultipleSpaces(resultString);

    var destinationElement = document.getElementById("numberInWordsMK");
    writeValueToInputField(destinationElement, resultString);
}

function toWords(number){
    var result = "";
    if (number === 0) return "zero";
    if (Math.floor(number / 1000000000) > 0){
        var billions = Math.floor(number / 1000000000);
        result += toWords(billions) + " billion ";
        number = number % 1000000000;
    }
    if (Math.floor(number / 1000000) > 0){
        var millions = Math.floor(number / 1000000);
        result += toWords(millions) + " million ";
        number = number % 1000000;
    }
    if (Math.floor(number / 1000) > 0){
        var thousands = Math.floor(number / 1000);
        result += toWords(thousands) + " thousand ";
        number = number % 1000;
    }
    if (Math.floor(number / 100) > 0){
        var hundreds = Math.floor(number / 100);
        result += toWords(hundreds) + " hundred ";
        number = number % 100;
    }
    if (Math.floor(number / 10) > 0){
        if (number < 20){
            switch(number){
                case 10:
                    result += " ten ";
                    break;
                case 11:
                    result += " eleven ";
                    break;
                case 12:
                    result += " twelve ";
                    break;
                case 13:
                    result += " thirteen ";
                    break;
                case 14:
                    result += " fourteen ";
                    break;
                case 15:
                    result += " fifteen ";
                    break;
                case 16:
                    result += " sixteen ";
                    break;
                case 17:
                    result += " seventeen ";
                    break;
                case 18:
                    result += " eighteen ";
                    break;
                case 19:
                    result += " nineteen ";
                    break;
            }
            number = 0;
        } else {
            var tens = Math.floor(number / 10);
            switch(tens){
                case 2:
                    result += " twenty ";
                    break;
                case 3:
                    result += " thirty ";
                    break;
                case 4:
                    result += " forty ";
                    break;
                case 5:
                    result += " fifty ";
                    break;
                case 6:
                    result += " sixty ";
                    break;
                case 7:
                    result += " seventy ";
                    break;
                case 8:
                    result += " eighty ";
                    break;
                case 9:
                    result += " ninety ";
                    break;
            }
            number = number % 10;
        }
    }
    if (number < 10){
        switch(number){
            case 1:
                result += " one ";
                break;
            case 2:
                result += " two ";
                break;
            case 3:
                result += " three ";
                break;
            case 4:
                result += " four ";
                break;
            case 5:
                result += " five ";
                break;
            case 6:
                result += " six ";
                break;
            case 7:
                result += " seven ";
                break;
            case 8:
                result += " eight ";
                break;
            case 9:
                result += " nine ";
                break;
        }
    }

    return result;
}

function toWordsMK(number){
    var result = "";
    if (number === 0) return "нула";
    if (Math.floor(number / 1000000000) > 0){
        var billions = Math.floor(number / 1000000000);
        if (billions === 1) result += " една милијарда ";
        else if (billions % 10 === 1 && billions % 100 !== 11) {
            result += toWordsMK(billions);
            result = result.slice(0, result.length - 3) + "на милијардa ";
        }
        else result += toWordsMK(billions) + " милијарди ";
        number = number % 1000000000;
    }
    if (Math.floor(number / 1000000) > 0){
        var millions = Math.floor(number / 1000000);
        if (millions === 1) result += " еден милион ";
        else if (millions % 10 === 1 && millions % 100 !== 11) {
            result += toWordsMK(millions) + " милион ";
        }
        else result += toWordsMK(millions) + " милиони ";
        number = number % 1000000;
    }
    if (Math.floor(number / 1000) > 0){
        var thousands = Math.floor(number / 1000);
        if (thousands === 1) result += " една илјада ";
        else if (thousands % 10 === 1 && thousands % 100 !== 11) {
            result += toWordsMK(thousands);
            result = result.slice(0, result.length - 3) + "на илјада ";
        }
        else if (thousands % 10 === 2 && thousands % 100 !== 12) {
            result += toWordsMK(thousands);
            result = result.slice(0, result.length - 2) + "е илјади ";
        }
        else result += toWordsMK(thousands) + " илјади ";
        number = number % 1000;
    }
    if (Math.floor(number / 100) > 0){
        var hundreds = Math.floor(number / 100);
        switch(hundreds){
            case 1:
                result += " сто ";
                break;
            case 2:
                result += " двеста ";
                break;
            case 3:
                result += " триста ";
                break;
            case 4:
                result += " четиристотини ";
                break;
            case 5:
                result += " петстотини ";
                break;
            case 6:
                result += " шестотини ";
                break;
            case 7:
                result += " седумстотини ";
                break;
            case 8:
                result += " осумстотини ";
                break;
            case 9:
                result += " деветстотини ";
                break;
        }
        number = number % 100;
    }
    if (Math.floor(number / 10) > 0){
        if (number < 20){
            switch(number){
                case 10:
                    result += " десет ";
                    break;
                case 11:
                    result += " единаесет ";
                    break;
                case 12:
                    result += " дванаесет ";
                    break;
                case 13:
                    result += " тринаесет ";
                    break;
                case 14:
                    result += " четиринаесет ";
                    break;
                case 15:
                    result += " петнаесет ";
                    break;
                case 16:
                    result += " шеснаесет ";
                    break;
                case 17:
                    result += " седумнаесет ";
                    break;
                case 18:
                    result += " осумнаесет ";
                    break;
                case 19:
                    result += " деветнаесет ";
                    break;
            }
            number = 0;
        } else {
            var tens = Math.floor(number / 10);
            switch(tens){
                case 2:
                    if (number % 10 > 0) result += " дваесет и ";
                    else result += " дваесет ";
                    break;
                case 3:
                    if (number % 10 > 0) result += " триесет и ";
                    else result += " триесет ";
                    break;
                case 4:
                    if (number % 10 > 0) result += " четириесет и ";
                    else result += " четириесет ";
                    break;
                case 5:
                    if (number % 10 > 0) result += " педесет и ";
                    else result += " педесет ";
                    break;
                case 6:
                    if (number % 10 > 0) result += " шеесет и ";
                    else result += " шеесет ";
                    break;
                case 7:
                    if (number % 10 > 0) result += " седумдесет и ";
                    else result += " седумдесет ";
                    break;
                case 8:
                    if (number % 10 > 0) result += " осумдесет и ";
                    else result += " осумдесет ";
                    break;
                case 9:
                    if (number % 10 > 0) result += " деведесет и ";
                    else result += " деведесет ";
                    break;
            }
            number = number % 10;
        }
    }
    if (number < 10){
        switch(number){
            case 1:
                result += " еден ";
                break;
            case 2:
                result += " два ";
                break;
            case 3:
                result += " три ";
                break;
            case 4:
                result += " четири ";
                break;
            case 5:
                result += " пет ";
                break;
            case 6:
                result += " шест ";
                break;
            case 7:
                result += " седум ";
                break;
            case 8:
                result += " осум ";
                break;
            case 9:
                result += " девет ";
                break;
        }
    }

    return result;
}

function capitalizeFirstCharacter(stringToEdit){
    return stringToEdit.charAt(0).toUpperCase() + stringToEdit.slice(1);
}

function removeMultipleSpaces(stringToEdit){
    var splitAtMultiple = stringToEdit.split("  ");
    var returnString = "";
    if (splitAtMultiple.length === 2) return splitAtMultiple[0] + " " + splitAtMultiple[1];
    else for(var i = 0; i < splitAtMultiple.length - 1; i++){
        returnString += splitAtMultiple[i];
        returnString += " ";
    }
    returnString += splitAtMultiple[splitAtMultiple.length - 1];
    return returnString;
}

function writeValueToInputField(element, value){
    element.value = value;
}
