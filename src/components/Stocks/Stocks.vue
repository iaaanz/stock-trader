<template>
  <div class="stocks">
    <div class="row">
      <Stock v-for="stock in stocks" :key="stock.id"/>
    </div>
  </div>
</template> 

<script>
import Stock from './Stock.vue'

export default {
  components: { Stock },
  data() {
    return {
      stocks: 9
    }
  }
}
</script>

<style>

</style>