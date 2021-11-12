/* eslint-disable no-console */
import axios from 'axios';
// import portfolio from './portfolio';

export default {
  state: {
    stocks: [
      {
        id: 0,
        name: 'Google',
        price: 100.00,
      },
      {
        id: 1,
        name: 'Facebook',
        price: 124.00,
      },
      {
        id: 2,
        name: 'BMW',
        price: 176.00,
      },
      {
        id: 3,
        name: 'Azure',
        price: 87.00,
      },
      {
        id: 4,
        name: 'Instagram',
        price: 36.00,
      },
      {
        id: 5,
        name: 'Honda',
        price: 219.00,
      },
    ],
  },
  actions: {
    buyStock({ commit, state }, stock) {
      const { name, ...purchase } = stock;
      const { qtd, totalPrice, stockId } = purchase;

      // TODO: parei aqui
      axios.get(`/my_stocks/${name}.json`)
        .then((res) => {
          console.log(res);
        })
        .catch();

      const purchasedStock = {
        ...purchase,
        qtd,
        totalPrice: state.myStocks[stockId].totalPrice + totalPrice,
      };

      return axios.patch(`/my_stocks/${name}.json`, purchasedStock)
        .then((res) => {
          console.log(res);
          commit('setSaldo', purchase);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    endDay({ commit, state }) {
      const oldStocks = state.stocks;
      const newStocks = oldStocks.map((stock, i) => {
        const newPrice = Math.round((stock.price + (stock.price / 100) * Math.floor(Math.random() * (5 - 1 + 1)) + 1) * 100) / 100;

        return { ...oldStocks[i], price: newPrice };
      });

      commit('updateStockPrices', newStocks);
    },
  },
  mutations: {
    updateStockPrices(state, newStocks) {
      state.stocks = newStocks;
    },
  },
  getters: {
    stocksToBuy(state) {
      return state.stocks;
    },
  },
};
