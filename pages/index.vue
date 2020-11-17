<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline">
          VK поисковик
        </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="search"
            label="Введите поисковой запрос"
            hide-details="auto"
            prepend-icon="mdi-magnify"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            rounded
            color="primary"
            to="news"
            @click="getNews()"
          >
            Поиск
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>

export default {
  data() {
    return {
      search: ''
    }
  },
  methods: {
    async getNews() {
      this.$store.dispatch('setNews', { search: this.search })
    }
  }
}
</script>
