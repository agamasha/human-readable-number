module.exports = function toReadable (number) {
    let result = '';
    if (number === 0) {
        return 'zero';
    }
    console.log((((number - (number % 10)) / 10)) % 10);
    if (((number - (number % 100)) / 100) === 1) {
        result = result + 'one hundred ';
    }
    else if (((number - (number % 100)) / 100) === 2) {
        result = result + 'two hundred ';
    }
    else if (((number - (number % 100)) / 100) === 3) {
        result = result + 'three hundred ';
    }
    else if (((number - (number % 100)) / 100) === 4) {
        result = result + 'four hundred ';
    }
    else if (((number - (number % 100)) / 100) === 5) {
        result = result + 'five hundred ';
    }
    else if (((number - (number % 100)) / 100) === 6) {
        result = result + 'six hundred ';
    }
    else if (((number - (number % 100)) / 100) === 7) {
        result = result + 'seven hundred ';
    }
    else if (((number - (number % 100)) / 100) === 8) {
        result = result + 'eight hundred ';
    }
    else if (((number - (number % 100)) / 100) === 9) {
        result = result + 'nine hundred ';
    }
    if ((((number - (number % 10)) / 10) % 10) === 1) {
        if (number.toString().slice(-1) === '1') {
        result = result + 'eleven';
        return result;
        }
        else if (number.toString().slice(-1) === '2') {
            result = result + 'twelve';
            return result;
        }
        else if (number.toString().slice(-1) === '3') {
            result = result + 'thirteen';
            return result;
        }
        else if (number.toString().slice(-1) === '4') {
            result = result + 'fourteen';
            return result;
        }
        else if (number.toString().slice(-1) === '5') {
            result = result + 'fifteen';
            return result;
        }
        else if (number.toString().slice(-1) === '6') {
            result = result + 'sixteen';
            return result;
        }
        else if (number.toString().slice(-1) === '7') {
            result = result + 'seventeen';
            return result;
        }
        else if (number.toString().slice(-1) === '8') {
            result = result + 'eighteen';
            return result;
        }
        else if (number.toString().slice(-1) === '9') {
            result = result + 'nineteen';
            return result;
        }
        else if (number.toString().slice(-1) === '0') {
            result = result + 'ten';
            return result;
        }
    }
    else if ((((number - (number % 10)) / 10) % 10) === 2) {
        result = result + 'twenty ';
    }
    else if ((((number - (number % 10)) / 10) % 10) === 3) {
        result = result + 'thirty ';
    }
    else if ((((number - (number % 10)) / 10) % 10) === 4) {
        result = result + 'forty ';
    }
    else if ((((number - (number % 10)) / 10) % 10) === 5) {
        result = result + 'fifty ';
    }
    else if ((((number - (number % 10)) / 10) % 10) === 6) {
        result = result + 'sixty ';
    }
    else if ((((number - (number % 10)) / 10) % 10) === 7) {
        result = result + 'seventy ';
    }
    else if ((((number - (number % 10)) / 10) % 10) === 8) {
        result = result + 'eighty ';
    }
    else if ((((number - (number % 10)) / 10) % 10) === 9) {
        result = result + 'ninety ';
    }
    if (number.toString().slice(-1) === '1') {
        result = result + 'one';
    }
    else if (number.toString().slice(-1) === '2') {
        result = result + 'two';
    }
    else if (number.toString().slice(-1) === '3') {
        result = result + 'three';
    }
    else if (number.toString().slice(-1) === '4') {
        result = result + 'four';
    }
    else if (number.toString().slice(-1) === '5') {
        result = result + 'five';
    }
    else if (number.toString().slice(-1) === '6') {
        result = result + 'six';
    }
    else if (number.toString().slice(-1) === '7') {
        result = result + 'seven';
    }
    else if (number.toString().slice(-1) === '8') {
        result = result + 'eight';
    }
    else if (number.toString().slice(-1) === '9') {
        result = result + 'nine';
    }
    return result.trimEnd();
}
  
