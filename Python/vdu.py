'''
Rạp chiếu phim áp dụng bảng giá vé sau:
  • Trẻ em (dưới 12 tuổi):  45.000 đồng
  • Học sinh (12 – 17 tuổi):  75.000 đồng
  • Người lớn (18–59 tuổi): 120.000 đồng
  • Người cao tuổi (≥ 60):  60.000 đồng
Nhập tuổi khách hàng, in ra loại vé và số tiền phải trả.

'''



tuoi = int(input("Nhập tuổi: "))
if tuoi < 12:
    loai, gia = "Trẻ em", 45000
elif tuoi <= 17:
    loai, gia = "Học sinh", 75000
elif tuoi <= 59:
    loai, gia = "Người lớn", 120000
else:
    loai, gia = "Người cao tuổi", 60000
print("Loại vé:", loai)
print("Giá vé:", gia, "đồng")
