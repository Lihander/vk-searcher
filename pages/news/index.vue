<template>
  <div class="news">
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <div class="news__top-line">
          <v-btn
            color="primary"
            to="/"
          >
            <v-icon>mdi-arrow-left-bold</v-icon>
          </v-btn>
          <h2>Найденные новости</h2>
        </div>
        <div class="news__list">
          <v-card class="news__item mx-auto" outlined v-for="(newsItem, index) in getNews.items" :key="index">
            <v-card-text>
              <div class="d-flex justify-space-between align-center mb-3">
                <div class="d-flex justify-start align-center">
                  <v-icon class="icon mr-2">mdi-calendar</v-icon>
                  <time class="font-weight-medium">{{getDate(newsItem.date)}}</time>
                </div>
                <div class="d-flex justify-start align-center">
                  <v-icon class="icon mr-2">mdi-account</v-icon>
                  <div class="font-weight-medium">{{getAuthor(newsItem.from_id)}}</div>
                </div>
              </div>
              <div class="news__item-text">{{newsItem.text}}</div>

              <swiper class="swiper" :options="swiperOption">
                <swiper-slide
                  v-for="(photo, photo_index) in getPhotos(newsItem.attachments)"
                  :key="photo_index"
                >
                  <v-card>
                    <v-img
                      height="250"
                      :src="photo"
                    ></v-img>
                  </v-card>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
            </v-card-text>
            <v-card-actions>
              <v-icon class="icon mr-2">mdi-heart-outline</v-icon>
              <div class="font-weight-medium">{{newsItem.likes.count}}</div>
              <v-spacer/>
              <v-btn
                color="primary"
                to="/"
              >
                Подробнее
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  name: "news",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        freeMode: true,
      }
    }
  },
  computed: {
    getNews() {
      return this.$store.getters.getNews
    }
  },
  created() {
    this.$store.dispatch('setNews', { search: this.$route.query.search })
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
    },
    getDate(timestamp) {
      const date = new Date(timestamp * 1000);
      return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    }
  }
}
</script>

<style lang="scss" scoped>
.news {
  height: 100%;
  width: 100%;

  &__top-line {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 32px;

    h2 {
      color: $primary;
      margin-left: 20px;
    }
  }

  &__item {
    margin: 24px;
    &-text {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 18px;
      margin: 18px 0;
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

  .icon {
    color: $primary;
  }
}
</style>
