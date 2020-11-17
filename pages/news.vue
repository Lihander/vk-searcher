<template>
  <div class="news">
    <v-btn
      color="primary"
      to="/"
    >
      <v-icon>mdi-arrow-left-bold</v-icon>
    </v-btn>
    <h2>Найденные новости</h2>
    <div class="news__list">
      <div class="news__item" v-for="(newsItem, index) in getNews.items" :key="index">
        <div class="news__item-date">{{new Date(newsItem.date)}}</div>
        <div class="news__item-autor">{{getAuthor(newsItem.from_id)}}</div>
        <div class="news__item-text">{{newsItem.text}}</div>
        <div class="news__item-likes">{{newsItem.likes.count}}</div>
        <div class="news__item-imgs">
          <img
            v-for="(photo, photo_index) in getPhotos(newsItem.attachments)"
            :key="photo_index"
            :src="photo"
          />
        </div>
        <v-btn
          color="primary"
          to="/"
        >
          Подробнее
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "news",
  computed: {
    getNews() {
      return this.$store.getters.getNews
    }
  },
  methods: {
    getAuthor(id) {
      let author = ''
      if (id < 0) {
        author = this.getNews.groups.find(group => group.id === Math.abs(id))
        return author.name
      } else {
        author = this.getNews.profiles.find(profile => profile.id === id)
        return author.last_name + ' ' + author.first_name
      }
    },
    getPhotos(attachments) {
      if (attachments) {
        const photosData = attachments.filter(attachment => attachment.type === 'photo')

        if (photosData) {
          return photosData.map(data => {
            return data.photo.sizes.find(photo => photo.type === 'p').url
          })
        }
      }
      return []
    }
  }
}
</script>

<style lang="scss" scoped>
.news {
  height: 100%;
  width: 100%;

  &__item {
    margin-bottom: 20px;
    &-text {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &-imgs {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      margin-bottom: 10px;
      img {
        margin-right: 20px;

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
