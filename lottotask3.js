// This program sould display an alert message using the given variables using if statement
// If statement is not the most efficient way of desinging the program as it has too many repetition and lines.
var customerNumbers = 12;
var winningNumbers = [12, 17, 24, 37, 38, 43];
var strWinning = "This Week's winning numbers are:\n\n";
var strCustomer = "The Customer's number is:\n\n";
var strWin = 'We have a match and a winner!';
var strSorry = 'Sorry, you are not the winner of this week.';

if (customerNumbers === winningNumbers[0] || customerNumbers === winningNumbers[1] ||
    customerNumbers === winningNumbers[2] || customerNumbers === winningNumbers[3] ||
    customerNumbers === winningNumbers[4] || customerNumbers === winningNumbers[5]) {
    alert(strWinning + winningNumbers + '\n\n' + strCustomer + customerNumbers + '\n\n' + strWin);
} else {
    alert(strWinning + winningNumbers + '\n\n' + strCustomer + customerNumbers + '\n\n' + strSorry);
};
