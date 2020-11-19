import { Store } from 'vuex';
import createPersistedState from 'vuex-persistedstate'

const store = () => new Store({
  state: {
    news: []
  },

  getters: {
    getNews(state) {
      return state.news
    }
  },

  mutations: {
    setNews(state, payload) {
      state.news = payload
    }
  },

  actions: {
    async setNews(context, payload) {

      const params = {
        q: payload.search,
        access_token: 'efcd594aefcd594aefcd594a3aefb9a163eefcdefcd594ab07e5df3be11e5af546a04b4',
        v: '5.126',
        extended: 1
      };

      const result = await this.$axios.get('/api/newsfeed.search', { params })

      context.commit('setNews', result.data.response);
    }
  },

  plugins: [createPersistedState()]
});

export default store;
