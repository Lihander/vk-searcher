<template>
  <v-row justify="center">
    <v-col cols="12" sm="8" md="6">
      <NewsCard :item="getNewsItem" single />
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  computed: {
    getNewsItem() {
      return this.$store.getters.getNews.items.find(news => news.id.toString() === this.$route.params.id)
    }
  }
}
</script>
