# Khai báo thư viện cần thiết
import sys
from PyQt6.QtWidgets import QMainWindow, QApplication, QMessageBox, QTableWidgetItem, QHeaderView
from PyQt6 import QtWidgets, uic

# ---------------------------------------------------------
# LỚP GIAO DIỆN CHÍNH
# ---------------------------------------------------------
class giaoDienDangNhap(QMainWindow):
    def __init__(self):
        super().__init__()
        # Nạp file thiết kế giao diện được tạo từ Qt Designer
        uic.loadUi("main.ui", self)
        # Ghi chú: Bạn sẽ kết nối các nút bấm vào hàm xử lý tại đây

# ---------------------------------------------------------
# KHỞI CHẠY HỆ THỐNG
# ---------------------------------------------------------
if __name__ == "__main__":
    # 1. Khởi tạo ứng dụng
    khoiChayHeThong = QApplication(sys.argv)
    # 2. Tạo đối tượng từ lớp giao diện chúng ta đã định nghĩa
    cuasochinh = giaoDienDangNhap()
    # 3. Hiển thị cửa sổ giao diện lên màn hình người dùng
    cuasochinh.show()
    # 4. Chạy vòng lặp sự kiện và thoát hệ thống khi đóng cửa sổ
    sys.exit(khoiChayHeThong.exec())