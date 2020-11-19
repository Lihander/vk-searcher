<template>
  <v-row justify="center">
    <v-col cols="12" sm="8" md="6">
      <div class="logo">
        <img src="/vk.png" alt="vk logo">
        <h1>Поисковик</h1>
      </div>
      <v-text-field
        v-model="search"
        label="Solo"
        placeholder="Введите поисковой запрос"
        solo
        rounded
        prepend-inner-icon="mdi-magnify"
      ></v-text-field>
      <div class="wrapper">
        <v-btn
          large
          rounded
          color="primary"
          @click="getNews()"
        >
          Поиск
        </v-btn>
      </div>
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
      if (this.search) {
        this.$router.push({path: '/news', query: {search: this.search}});
      }
    }
  }
}
</script>

<style lang="scss">
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;

  img {
    width: 100px;
  }

  h1 {
    color: $primary;
    font-size: 48px;
    font-family: 'Oswald', sans-serif;
    margin-left: 15px;
  }
}

.wrapper {
  width: 100%;
  text-align: right;
}
</style>
