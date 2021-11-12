<template >
<div class="col-md-4">
    <v-card elevation="2" class="m-3">
      <v-card-title class="warning">{{stock.name}} (R$: {{stock.price}} | Qtd: {{stock.qtd || 0}})</v-card-title>
      <div class="row m-3">
        <v-text-field
          v-model="qtdSell"
          v-mask="'################'"
          label="Quantidade"
          min="0"
          class="pr-2 pl-2"
          >
          </v-text-field>
        <v-btn >Vender</v-btn>
      </div>
    </v-card>
</div>
</template>

<script>
export default {
  data() {
    return {
      qtdSell: {
        type: Number,
        default: 0,
      },
    };
  },
  props: {
    stock: Object,
  },
  methods: {

  },
};
</script>

<style>

</style>
