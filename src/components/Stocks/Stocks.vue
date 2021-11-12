<template>
  <div class="stocks">
    <div class="row">
      <Stock v-for="stock in stocks" :key="stock.id" :stock="stock"/>
    </div>
  </div>
</template>

<script>
import Stock from './Stock';

export default {
  components: { Stock },
  data() {
    return {
    };
  },
  computed: {
    stocks() {
      return this.$store.getters.stocksToBuy;
    },
  },
  methods: {

  },
};
</script>

<style>

</style>
