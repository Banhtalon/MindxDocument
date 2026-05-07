class AnimeItem:
    def __init__(self, anime_id, title, release_date, image=None, rating=None, link=None):
        """
        Phương thức khởi tạo.

        Tham số
        --------
        rating: float
            Nếu không có rating thì mặc định bằng 0
        """
        ### YOUR CODE HERE

    def update(self, new_data:dict):
        """
        Cập nhật giá trị các thuộc tính của AnimeItem
        
        Tham số
        --------
        new_data: dict
            Chứa các cặp thuộc tính - giá trị.
            Nếu thuộc tính không có giá trị mới (None) thì không cập nhật thuộc tính đó.
        """
        ### YOUR CODE HERE


### Tạo đối tượng
anime1 = AnimeItem(1, "Jujutsu no Kaisen", "01/01/2022")

### Duyệt

### Thêm

### Xoá

### Sửa
