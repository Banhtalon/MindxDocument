from PyQt6.QtWidgets import QApplication, QMainWindow
from PyQt6 import uic
import sys 

class Login(QMainWindow):
    def __init__(self):
        super().__init__()
        uic.loadUi("gui/login.ui", self)

class Register(QMainWindow):
    def __init__(self):
        super().__init__()
        uic.loadUi("gui/register.ui", self)
    
if __name__ == '__main__':
    app = QApplication(sys.argv)
    login = Login()
    login.show()
    app.exec() 