class Student:
    def __init__(self, name, age, gender, school):
        self.name = name
        self.age = age
        self.gender = gender
        self.school = school
    
    def show(self):
        print("Name:", self.name)
        print("Age:", self.age)
        print("Gender:", self.gender)
        print("School:", self.school)

# Tạo đối tượng Student hs1
# tên Duy, 14 tuổi, giới tính Nam (số 1),
# học trường THCS Thạnh Phú Đông
hs1 = Student("Duy", 14, 1, "THCS Thạnh Phú Đông")