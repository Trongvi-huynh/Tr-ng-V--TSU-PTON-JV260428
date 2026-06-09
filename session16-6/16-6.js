function sumOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

const array1 = [1, 2, 3, 4, 5];
console.log(array1); // Output: [1, 2, 3, 4, 5]
const result = sumOfArray(array1);
console.log(result); // Output: 15

const array2 = [10, 20, 30];
console.log(array2); // Output: [10, 20, 30]
const result2 = sumOfArray(array2);
console.log(result2); // Output: 60

const array3 = [];const result3 = sumOfArray(array3);
console.log(array3); // Output: []
console.log(result3); // Output: 0
