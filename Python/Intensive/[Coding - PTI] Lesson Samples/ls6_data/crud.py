import json

class AnimeItem:
    def __init__(self, anime_id, title, release_date, image=None, rating=None, link=None):
        self.id = anime_id
        self.title = title
        self.release_date = release_date
        self.image = image
        self.rating = float(rating) if rating else 0
        self.link = link

anime = AnimeItem(1, "One Piece", "01/01/2001")

# Viết một đối tượng vào file
with open("anime.json", "w") as file:
    json.dump(anime.__dict__, file)

# Đọc lại từ file đã viết
with open("anime.json", "r") as file:
    data = json.load(file)
    loaded_data = AnimeItem(data["id"],
                            data["title"],
                            data["release_date"])
print(loaded_data.title) # One Piece

# Đọc nhiều đối tượng từ file vào danh sách đối tượng
with open("animes.json", "r") as file:
    anime_data = json.load(file)

anime_item_list = list()
for anime_item_dict in anime_data:
    anime = AnimeItem(anime_id=anime_item_dict["id"],
                      title=anime_item_dict["title"],
                      release_date=anime_item_dict["release_date"])
    anime_item_list.append(anime)

# In ra để kiểm tra
for anime in anime_item_list:
    print(anime.title)