class AnimeItem:
    def __init__(self, anime_id, title, release_date, image=None, rating=None, link=None):
        self.id = anime_id
        self.title = title
        self.release_date = release_date
        self.image = image
        # Nếu không có rating thì mặc định bằng 0
        self.rating = float(rating) if rating else 0
        self.link = link
    
    def update(self, new_data:dict):
        for attribute, value in new_data.items():
            # Chỉ khi nào thuộc tính có giá trị mới thì mới update
            if value:
                setattr(self, attribute, value)
                
                
class AnimeList:
    def __init__(self):
        # Tạo danh sách chứa các đối tượng AnimeItem
        self.anime_item_list = list()
    
    def get_first_item_by_title(self, anime_title):
        """Trả về đối tượng AnimeItem có title là anime_title"""
    
    def add_item(self, anime_dict):
        """Phương thức thêm một đối tượng AnimeItem mới"""
    
    def edit_item(self, edit_title, anime_dict):
        """Phương thức sửa một đối tượng AnimeItem có title là edit_title"""
    
    def delete_item(self, delete_title):
        """Phương thức xoá đối tượng AnimeItem có title là delete_title"""
    
    def search_by_title(self, search_title) -> list[AnimeItem]:
        """
        Phương thức tìm kiếm tất cả các đối tượng AnimeItem có title là search_title
        """

    def sort_item_by_rating(self, top=None):
        """
        Phương thức sắp xếp theo rating
        """

    def sort_item_by_title(self, top=None):
        """
        Phương thức sắp xếp theo title 
        """
        
    def sort_item_by_date(self, top=None):
        """
        Phương thức sắp xếp theo release_date 
        """