function minOfArray(array) {
    if (!Array.isArray(array)) {
    alert('Dữ liệu không hợp lệ');
    return;
  }
  if (array.length === 0) {
    alert('Mảng không có phần tử');
    return;
    }

    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

const arr1 = [5, 2, 9, 1, 5];
let min1 = minOfArray(arr1);
console.log('Giá trị nhỏ nhất trong arr1:', min1);

const arr2 = [3, 7, 4, 2, 8];
let min2 = minOfArray(arr2);
console.log('Giá trị nhỏ nhất trong arr2:', min2);

const arr3 = [10, 15, 5, 20, 8];
let min3 = minOfArray(arr3);
console.log('Giá trị nhỏ nhất trong arr3:', min3);
