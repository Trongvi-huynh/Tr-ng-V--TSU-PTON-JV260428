let a = Number(prompt("Nhập số a:"));
let b = Number(prompt("Nhập số b:"));
let phepTinh = prompt("Xin chọn phép tính (+, -, *, /)");
if (phepTinh === "+") {
    ketQua = a + b;
    } else if (phepTinh === "-") {
        ketQua = a - b;
    }  else if (phepTinh === "*") {
            ketQua = a * b;
    }  else if (phepTinh === "/") {
                ketQua = a / b;
    }

alert("Kết quả của phép tính đã chọn là:" + ketQua);
