function isPalindrome(str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

const inputString = prompt("Enter a string:");
if (isPalindrome(inputString)) {
    alert("The string is a palindrome.");
} else {
    alert("The string is not a palindrome.");
}
