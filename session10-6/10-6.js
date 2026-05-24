// 1. Nhập điểm các môn (và chuyển sang kiểu số)
let math = Number(prompt('Nhập điểm môn Toán: '));
let physics = Number(prompt('Nhập điểm môn Văn: '));
let chemistry = Number(prompt('Nhập điểm môn Hoá: '));

// Công thức: (Tổng các môn) / (Số lượng môn)
let GPA = (math + physics + chemistry) / 3;

// 3. Hiển thị kết quả
alert('Điểm trung bình của bạn là: ' + GPA);
