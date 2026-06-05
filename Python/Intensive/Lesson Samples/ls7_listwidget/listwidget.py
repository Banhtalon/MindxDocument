import sys
    
from PyQt6 import uic
from PyQt6.QtWidgets import QMainWindow, QApplication
from PyQt6.QtCore import Qt

class MainWindow(QMainWindow):
    def __init__(self):
        super(MainWindow, self).__init__()
        self.ui = uic.loadUi("listwidget.ui", self)

        self.list = ["Dog", "Cat", "Duck"]
        self.ui.listWidget.addItems(self.list)
        curr = self.ui.listWidget.currentRow()
        self.ui.listWidget.insertItem(0, "Tiger")
        self.ui.listWidget.takeItem(3)
        matched_items = self.ui.listWidget.findItems("Dog", Qt.MatchFlag.MatchContains)
        for i in range(self.ui.listWidget.count()):
                it = self.ui.listWidget.item(i)
                it.setHidden(it not in matched_items)
        self.show()

if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = MainWindow()
    sys.exit(app.exec())
    