import axios from 'axios';

export default {
  state: {
    stocks: [
      {
        id: 1,
        name: 'Google',
        price: 100.00,
      },
      {
        id: 2,
        name: 'Facebook',
        price: 124.00,
      },
      {
        id: 3,
        name: 'BMW',
        price: 247.00,
      },
      {
        id: 4,
        name: 'Azure',
        price: 87.00,
      },
      {
        id: 5,
        name: 'Instagram',
        price: 98.00,
      },
      {
        id: 6,
        name: 'Honda',
        price: 98.00,
      },
    ],
  },
  actions: {
    buyStock({ commit }, purchase) {
      return axios.post('/myStocks.json', purchase)
        .then((res) => {
          console.log(res);
          commit('setStock');
        })
        .catch((err) => {
          console.log(err);
        });
    },
    endDay({ commit, state }) {

    },
  },
  mutations: {
    setStock(state, stock) {
      state.stocks = stock;
    },
  },
  getters: {
    stocksToBuy(state) {
      return state.stocks;
    },
  },
};
