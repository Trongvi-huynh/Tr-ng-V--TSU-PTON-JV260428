let canNang = parseFloat(prompt("Nhập cân nặng (kg):"));
let chieuCao = parseFloat(prompt("Nhập chiều cao (m):"));
let BMI = canNang / (chieuCao * chieuCao);
let phanLoai = " ";
if (BMI < 18.5) {
        phanLoai = "Cân nặng thấp (gầy)";
    } else if (BMI >= 18.5 && BMI <= 22.9) {
        phanLoai = "Bình thường";
    } else if (BMI >= 23 && BMI <= 24.9) {
        phanLoai = "Tiền béo phì";
    } else if (BMI >= 25 && BMI <= 29.9) {
        phanLoai = "Béo phì độ I";
    } else {
        phanLoai = "Béo phì độ II";
    }
    alert("Chỉ số BMI của bạn là: " + BMI.toFixed(1) + "\nPhân loại: " + phanLoai);
