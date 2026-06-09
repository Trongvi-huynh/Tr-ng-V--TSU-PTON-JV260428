function isEven(number) {
    return number % 2 === 0;
}
let number = prompt("Enter a number:");
if (isEven(number)) {
    alert(true);
} else {
    alert(false);
}   
