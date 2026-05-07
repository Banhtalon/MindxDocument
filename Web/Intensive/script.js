// Khai báo biến để lưu trữ thông tin sản phẩm
let productName = "Laptop Legion";
let productPrice = 1500;
let VAT = 0.1; // Thuế VAT 10%

// Hàm tính giá sau thuế
const totalpayment = (price, vat) => {
  return price + price * vat;
};

// Sử dụng template literals để hiển thị chuỗi html
const productInfo = `
    <p>Tên sản phẩm: ${productName}</p>
    <p>Giá sản phẩm: $${productPrice}</p>
    <p>Giá sau thuế VAT: $${totalpayment(productPrice, VAT)}</p>
`;

// Hiển thị thông tin sản phẩm trên màn hình
document.getElementById("product-container").innerHTML = productInfo;
