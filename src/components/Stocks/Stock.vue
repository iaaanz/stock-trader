<template >
<div class="col-md-4">
    <v-card elevation="2" class="m-3">
      <v-card-title class="primary">
        {{stock.name}}
        (R$: {{stock.price}})</v-card-title>
      <div class="row m-3">
        <v-text-field
          v-model="qtd"
          v-mask="'################'"
          label="Quantidade"
          min="0"
          class="pr-2 pl-2"
          >
          </v-text-field>
        <v-btn @click="buyStock">Comprar</v-btn>
      </div>
    </v-card>
</div>
</template>

<script>
export default {
  data() {
    return {
      qtd: {
        type: Number,
        default: null,
      },
    };
  },
  props: {
    stock: Object,
  },
  mounted() {
  },
  methods: {
    buyStock() {
      const purchasedStock = {
        stockId: this.stock.id,
        name: this.stock.name,
        price: this.stock.price,
        qtd: parseFloat(this.qtd),
        totalPrice: this.stock.price * parseFloat(this.qtd),
      };

      this.qtd = null;
      return this.$store.dispatch('buyStock', purchasedStock);
    },
  },
};
</script>

<style>

</style>
