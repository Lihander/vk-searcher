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
          <div class="news__item"  v-for="(newsItem, index) in getNews.items" :key="index" >
            <NewsCard v-if="newsItem.text" :item="newsItem"/>
          </div>
        </div>
      </v-col>
    </v-row>
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
  created() {
    this.$store.dispatch('setNews', { search: this.$route.query.search })
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
}
</style>
