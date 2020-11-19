<template>
  <v-card class="card__item mx-auto" outlined>
    <v-card-text>
      <div class="d-flex justify-space-between align-center mb-3">
        <div class="d-flex justify-start align-center">
          <v-icon class="icon mr-2">mdi-calendar</v-icon>
          <time class="font-weight-medium">{{getDate(item.date)}}</time>
        </div>
        <div class="d-flex justify-start align-center">
          <v-icon class="icon mr-2">mdi-account</v-icon>
          <div class="font-weight-medium">{{getAuthor(item.from_id)}}</div>
        </div>
      </div>
      <div class="card__item-text" :class="{ 'card__item-text--hide': !single}">{{item.text}}</div>

      <swiper class="swiper" :options="swiperOption">
        <swiper-slide
          v-for="(photo, photo_index) in getPhotos(item.attachments, 'p')"
          :key="photo_index"
        >
          <v-card class="card__slide">
            <v-icon class="card__slide--expand-icon" @click="showFullsizeImage(photo_index)">mdi-arrow-expand</v-icon>
            <v-img
              height="250"
              :src="photo"
            ></v-img>
          </v-card>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </v-card-text>
    <v-card-actions class="mx-2">
      <v-icon class="icon mr-2">mdi-heart-outline</v-icon>
      <div class="font-weight-medium">{{item.likes.count}}</div>
      <v-spacer/>
      <v-btn
        v-if="!single"
        color="primary"
        :to="/news/+item.id"
      >
        Подробнее
      </v-btn>
    </v-card-actions>

    <Modal v-if="showModal" @close="showModal = false">
      <v-img
        :src="getFullsizePhoto(imageIndex, item.attachments, 'z')"
      ></v-img>
    </Modal>
  </v-card>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import Modal from "@/components/Modal";
export default {
  name: "NewsCard",
  components: {
    Modal,
    Swiper,
    SwiperSlide
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    single: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showModal: false,
      imageIndex: 0,
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
    getPhotos(attachments, size) {
      if (attachments) {
        const photosData = attachments.filter(attachment => attachment.type === 'photo')

        if (photosData) {
          return photosData.map(data => {
            const photo = data.photo.sizes.find(photo => photo.type === size)
            if (photo) {
              return photo.url
            } else {
              return data.photo.sizes[data.photo.sizes.length - 1].url
            }
          })
        }
      }
      return []
    },
    getDate(timestamp) {
      const date = new Date(timestamp * 1000);
      return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    },
    getFullsizePhoto(index, attachments, size) {
      return this.getPhotos(attachments, size)[index]
    },
    showFullsizeImage(index) {
      this.showModal = true
      this.imageIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  &__item {
    margin: 24px;
    &-text {
      font-size: 18px;
      margin: 18px 0;

      &--hide {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
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

  &__slide {
    position: relative;
    &--expand-icon {
      position: absolute;
      top: 5px;
      right: 5px;
      width: 24px;
      height: 24px;
      border-radius: 50% !important;
      color: $primary;
      background-color: rgba($white, 0.8);
      z-index: 999;
      padding: 5px;
      cursor: pointer;
      transition: all ease-in-out .3s;

      &:hover {
        background-color: rgba($white, 1);
      }
    }
  }
}

.icon {
  color: $primary;
}
</style>
