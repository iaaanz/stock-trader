export default {
  state: {
    money: 1000,
    myStocks: ['teste'],
  },
  actions: {
    buyStock() {

    },
    sellStock() {

    },
  },
  mutations: {
    setSaldo(state, { totalPrice }) {
      state.money -= totalPrice;
    },
    setStock() {

    },
  },
  getters: {
    myStocks(state) {
      return state.myStocks;
    },
    getSaldo(state) {
      return state.money;
    },
  },
};

// const { qtd, totalPrice, stockId } = purchase;

// const stock = {
//   ...purchase,
//   qtd: state.getters.myStocks + qtd,
//   totalPrice: state.myStocks[stockId].totalPrice + totalPrice,
// };

// return axios.patch(`/my_stocks/${purchasedStock.name}.json`, purchase)
// .then((res) => {
//   console.log(res);
//   commit('setSaldo', purchase);
// })
// .catch((err) => {
//   console.log(err);
// });
