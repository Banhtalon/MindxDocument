// 1. Khai báo dữ liệu sản phẩm bằng ES6 (const/let)
const productName = "Laptop";
const price = 1500;
const vatRate = 0.1; // 10%

// 2. Tính toán tổng thanh toán
const totalPayment = Math.round(price * (1 + vatRate));

// 3. Sử dụng Template Literals để tạo chuỗi HTML
// Lưu ý: Dấu ` cho phép xuống dòng và truyền biến trực tiếp bằng ${}
const productHTML = `
    <div class="product-info">
        <p>Sản phẩm: <strong>${productName}</strong></p>
        <p>Giá: $${price}</p>
        <p>Thuế VAT: ${vatRate * 100}%</p>
        <p>Tổng thanh toán: $${totalPayment}</p>
    </div>
`;

// 4. Hiển thị ra màn hình
document.getElementById("product-container").innerHTML = productHTML;
