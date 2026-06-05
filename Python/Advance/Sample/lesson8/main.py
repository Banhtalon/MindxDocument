import sys
from PyQt6.QtWidgets import QMainWindow, QApplication, QMessageBox, QTableWidgetItem, QHeaderView
from PyQt6 import QtWidgets, uic

# --- LỚP MÀN HÌNH ĐĂNG NHẬP ---
class Login(QMainWindow):
    def __init__(self):
        super().__init__()
        # Tải giao diện từ file .ui
        uic.loadUi("gui/login.ui", self)
        # Kết nối nút bấm với hàm xử lý
        self.btnRegister.clicked.connect(self.show_register)
        self.btnLogin.clicked.connect(self.check_login)

    # Phương thức kiểm tra thông tin đăng nhập
    def check_login(self):
        email = self.txtEmail.text()
        password = self.txtPassword.text()
        # logic kiểm tra thông tin đăng nhập:
        if email == "admin@example.com" and password == "admin":
        # Kiểm tra ong nếu đúng thì chuyển sang cửa sổ main và đóng cửa sổ đăng nhập
            main.show()
            self.close()
        # Nếu thông tin đăng nhập không đúng, hiển thị thông báo lỗi
        else:
            msg = QMessageBox(self)     # Tạo một QMessageBox mới
            msg.setText("Vui lòng kiểm tra lại thông tin đăng nhập") # Thiết lập nội dung thông báo
            msg.setIcon(QMessageBox.Icon.Warning) # Thiết lập biểu tượng cảnh báo
            msg.exec() 
        
    def show_register(self):
        # Sử dụng biến 'register' toàn cục
        register.show()
        self.close()

# --- LỚP MÀN HÌNH ĐĂNG KÝ ---
class Register(QMainWindow):
    def __init__(self):
        super().__init__()
        uic.loadUi("gui/register.ui", self)
        self.btnLogin.clicked.connect(self.show_login)

    def show_login(self):
        # Sử dụng biến 'login' toàn cục
        login.show()
        self.close()

# --- LỚP MÀN HÌNH CHÍNH ---
class Main(QMainWindow):
    def __init__(self) :
        super().__init__()
        uic.loadUi("gui/main.ui", self)

# --- KHỞI CHẠY CHƯƠNG TRÌNH ---
if __name__ == "__main__":
    # 1. Khởi tạo ứng dụng
    khoiChayHeThong = QApplication(sys.argv)
    # 2. Tạo đối tượng từ lớp giao diện chúng ta đã định nghĩa
    login = Login()
    register = Register()
    main = Main()
    login.show()
    # 4. Chạy vòng lặp sự kiện và thoát hệ thống khi đóng cửa sổ
    sys.exit(khoiChayHeThong.exec())