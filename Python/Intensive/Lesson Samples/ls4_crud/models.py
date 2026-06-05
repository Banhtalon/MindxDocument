import operator
from datetime import datetime

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
        """
        Trả về đối tượng AnimeItem có title là anime_title
        """
        for anime_item in self.anime_item_list:
            # Tìm thấy
            if anime_item.title == anime_title:
                return anime_item
        # Không tìm thấy
        return False
    
    def add_item(self, anime_dict):
        """
        Phương thức thêm một đối tượng AnimeItem mới
        """
        # Tạo đối tượng 
        anime_dict["id"] = len(self.anime_item_list)
        new_item= AnimeItem(anime_id=anime_dict["id"],
                             title=anime_dict["title"],
                             release_date=anime_dict["release_date"],
                             image=anime_dict["image"],
                             rating=anime_dict["rating"],
                             link=anime_dict["link"])
        # Thêm vào danh sách phần tử
        self.anime_item_list.append(new_item)
    
    def edit_item(self, edit_title, new_dict):
        """
        Phương thức sửa một đối tượng AnimeItem có title là edit_title
        """
        # Tìm đối tượng 
        matched = self.get_first_item_by_title(edit_title)
        # Sửa đối tượng
        if matched:
            matched.update(new_dict)
        
    
    def delete_item(self, delete_title):
        """
        Phương thức xoá đối tượng AnimeItem có title là delete_title
        """
        matched = self.get_first_item_by_title(delete_title)
        if matched:
            self.anime_item_list.remove(matched)
    
    def search_by_title(self, search_title) -> list[AnimeItem]:
        """
        Phương thức tìm kiếm tất cả các đối tượng AnimeItem có title là search_title
        """
        matched_items = []
        for anime_item in self.anime_item_list:
            if search_title in anime_item.title.lower():
                matched_items.append(anime_item)
        return matched_items

    def sort_item_by_rating(self, top=None):
        """
        Phương thức sắp xếp theo rating
        """
        self.anime_item_list = sorted(self.anime_item_list, 
                                      key=operator.attrgetter('rating'),
                                      reverse=True
                                      )
        if top:
            return self.anime_item_list[top]
    
    def sort_item_by_title(self, top=None):
        """
        Phương thức sắp xếp theo title 
        """
        self.anime_item_list = sorted(self.anime_item_list, 
                                      key=operator.attrgetter('title')
                                      )
        if top:
            return self.anime_item_list[top]
    
    def sort_item_by_date(self, top=None):
        """
        Phương thức sắp xếp theo release_date 
        """
        self.anime_item_list = sorted(self.anime_item_list, 
                                      key=lambda x: format_date(x.release_date),
                                      reverse=True)
        if top:
            return self.anime_item_list[top]

def format_date(date_text):
    return datetime.strptime(date_text, '%b %Y')