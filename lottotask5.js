// This program sould display an alert message using the given variables and functions
// getting functions makes programming easier and able to follow the executing process.
var customerNumbers = 12;
var winningNumbers = [12, 17, 24, 37, 38, 13];
var strWinning = "This Week's winning numbers are:\n\n";
var strCustomer = "The Customer's number is:\n\n";
var strWin = 'We have a match and a winner!';
var strSorry = 'Sorry, you are not the winner of this week.';
var strall = strWinning + winningNumbers + '\n\n' + strCustomer + customerNumbers + '\n\n'
var number_match = false;


function getCustomerNumber(number) {
    return number;
}

function getWinningNumbers(number) {
    return number;
}
// checkNumbers function returns the number matching of the 2 given array.
function checkNumbers(customerNum, winningNum) {
    for (i = 0; i < winningNum.length; i++) {
        if (winningNum[i] === customerNum) {
            number_match = true;
        }
    }
    return number_match;
};

function displayResult(matching) {
    (matching === true) ? alert(strall + strWin): alert(strall + strSorry)
}
//function initializing program
function init() {
    getCustomerNumber(customerNumbers);
    getWinningNumbers(winningNumbers);
    checkNumbers(customerNumbers, winningNumbers);
    displayResult(number_match);

}
//kickes off program
init()
