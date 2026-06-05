import sys
from PyQt6.QtWidgets import QApplication, QWidget, QPushButton

app = QApplication(sys.argv)
window = QWidget()
button = QPushButton("Click Me", window)
button.setGeometry(100, 100, 100, 30)
window.show()
app.exec()
