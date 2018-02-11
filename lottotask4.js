// This program sould display an alert message using the given variables using  for loop and if statement
// For loop is a better option for iterating through in an array, however we still need to use more efficient way to display the values.
var customerNumbers = 12;
var winningNumbers = [12, 17, 24, 37, 38, 13];
var strWinning = "This Week's winning numbers are:\n\n";
var strCustomer = "The Customer's number is:\n\n";
var strWin = 'We have a match and a winner!';
var strSorry = 'Sorry, you are not the winner of this week.';
var number_match = false;
for (i = 0; i < winningNumbers.length; i++) {
    if (winningNumbers[i] === customerNumbers) {
        number_match = true;
    }
};
if (number_match === true) {
    alert(strWinning + winningNumbers + '\n\n' + strCustomer + customerNumbers + '\n\n' + strWin);
} else {
    alert(strWinning + winningNumbers + '\n\n' + strCustomer + customerNumbers + '\n\n' + strSorry);
};
