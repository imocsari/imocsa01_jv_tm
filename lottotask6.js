// This program sould display an alert message using the given variables using functions
// getting functions makes programming easier and able to follow the executing process.
var customerNumbers = [12, 17, 24, 37, 38, 13];
var winningNumbers = [12, 17, 24, 37, 38, 13];
var strWinning = "This Week's winning numbers are:\n\n";
var strCustomer = "The Customer's numbers are:\n\n";
var strall = strWinning + winningNumbers + '\n\n' + strCustomer + customerNumbers + '\n\n'
var matches = 0;


function getCustomerNumber(number) {
    return number;
}

function getWinningNumbers(number) {
    return number;
}


// checkNumbers function returns the number matching of the 2 given array.
function checkNumbers(customerNum, winningNum) {
    for (i = 0; i < winningNum.length; i++) {
        if (winningNum[i] === customerNum[i]) {
            matches += 1;
        }
    }

};

function displayResult(matches) {
    alert(strall + "Numbers matched: \n\n" + matches);
}

//function initializing program
function init() {
    getCustomerNumber(customerNumbers);
    getWinningNumbers(winningNumbers);
    checkNumbers(customerNumbers, winningNumbers);
    displayResult(matches);

}
//kickes off program
init()
