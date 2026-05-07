from models import models

dtb = models.AnimeDatabase()
print(len(dtb.anime_item_list))

### TEST READ
dtb.load_data()
print(len(dtb.anime_item_list))
