<template>
  <div class="portfolio">
    <div class="row">
      <Stocks v-for="stock in myStocks" :key="stock.id" :stock="stock"/>
    </div>
  </div>
</template>

<script>
import Stocks from './Stocks';

export default {
  components: { Stocks },
  data() {
    return {
    };
  },
  computed: {
    myStocks() {
      return this.$store.getters.myStocks;
    },
  },
};
</script>

<style>

</style>
