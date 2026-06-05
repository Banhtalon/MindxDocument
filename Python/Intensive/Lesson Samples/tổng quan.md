# Tổng quan dự án Anime Database (ls8_sample & ls10_sample)

Dựa trên mã nguồn của hai thư mục `ls8_sample` và `ls10_sample`, đây là bản tổng hợp các kiến thức chủ đạo của dự án cũng như sự phát triển kiến thức từ bài 8 (ls8) lên bài 10 (ls10).

## 1. Các kiến thức chủ đạo của dự án (Nền tảng từ ls8)

Dự án là một ứng dụng Desktop quản lý cơ sở dữ liệu Anime (CRUD Application) được xây dựng bằng **PyQt6**, áp dụng các kiến thức quan trọng sau:

- **Xây dựng giao diện (GUI) với PyQt6:**
  - Sử dụng module `uic` để load trực tiếp các file giao diện `.ui` (được thiết kế từ Qt Designer) thay vì code giao diện chay.
  - Tùy chỉnh giao diện bằng file stylesheet **QSS** (`.qss`) tương tự như CSS trong Web.
- **Định tuyến đa trang (Multi-page Routing):**
  - Sử dụng `QStackedWidget` để chuyển đổi qua lại giữa các màn hình khác nhau trong cùng một cửa sổ (Home, Rank, CRUD) thông qua phương thức `setCurrentIndex()`.
- **Tổ chức mô hình dữ liệu (Data Models):**
  - Quản lý dữ liệu thông qua các class (`AnimeItem`, `AnimeDatabase`).
  - Tách biệt logic xử lý dữ liệu (đọc/ghi file JSON, thêm, sửa, xóa, sắp xếp, tìm kiếm) khỏi logic giao diện (UI).
- **Thực hiện đầy đủ các thao tác CRUD (Create - Read - Update - Delete):**
  - **Read:** Hiển thị dữ liệu danh sách lên thành phần `QListWidget`.
  - **Create & Update:** Sử dụng cửa sổ hộp thoại tuỳ chỉnh `QDialog` (như `AddDialog` và `EditDialog`) để lấy dữ liệu đầu vào từ người dùng và trả về cho cửa sổ chính.
  - **Delete:** Sử dụng `QMessageBox` để tạo các hộp thoại xác nhận (Confirm) trước khi thực hiện hành động xoá.

## 2. Sự thay đổi và nâng cấp kiến thức từ ls8 lên ls10

Từ phiên bản `ls8_sample` (tập trung vào hoàn thiện ứng dụng CRUD cơ bản), phiên bản `ls10_sample` đã mở rộng và bổ sung các tính năng tương tác bằng âm thanh. Các kiến thức mới bao gồm:

- **Tích hợp thư viện xử lý âm thanh của bên thứ 3:**
  - Import và bắt đầu làm quen với các thư viện xử lý giọng nói: `pyttsx3` (Text-to-Speech) và `speech_recognition` (Speech-to-Text).
- **Text-to-Speech (Chuyển đổi văn bản thành giọng nói):** 
  - Khởi tạo và sử dụng engine TTS thông qua thư viện `pyttsx3`.
  - Tích hợp tính năng cho phép ứng dụng "đọc" nội dung văn bản của các nút bấm khi người dùng tương tác (`self.tts_engine.say()` và `self.tts_engine.runAndWait()`).
- **Kỹ thuật xử lý Widget và Signals nâng cao trong PyQt6:** 
  - **Tìm kiếm component động:** Thay vì gán thủ công từng nút, dự án sử dụng `self.findChildren(QPushButton)` để quét và lấy toàn bộ các nút bấm có trong cửa sổ.
  - **Binding sự kiện trong vòng lặp:** Ứng dụng kỹ thuật sử dụng `lambda` function với tham số mặc định (`lambda _, b=button: self.speak_text(b)`) để xử lý triệt để bài toán scope khi kết nối hàng loạt tín hiệu (signals) trong một vòng lặp `for`.

**Kết luận:** Quá trình từ ls8 lên ls10 là bước chuyển từ việc xây dựng một ứng dụng quản lý dữ liệu (CRUD) tĩnh, hoàn chỉnh về mặt giao diện và logic sang một ứng dụng mang tính tương tác cao hơn, tích hợp các công nghệ thông minh (âm thanh, giọng nói) và sử dụng các kỹ thuật vòng lặp/lambda nâng cao của Python.
