export default {
  state: {
    money: 1000,
    myStocks: [],
  },
  actions: {
    sellStock() {

    },
  },
  mutations: {
    setSaldo(state, { totalPrice }) {
      state.money -= totalPrice;
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
