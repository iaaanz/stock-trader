<template >
<div class="col-md-4">
    <v-card elevation="2" class="m-3">
      <v-card-title class="primary">Google (R$: 120,00)</v-card-title>
      <div class="row m-3">
        <v-text-field
          v-model="stockQtd"
          v-mask="'################'"
          label="Quantidade"
          min="0"
          class="pr-2 pl-2"
          >
          </v-text-field>
        <v-btn>Comprar</v-btn>
      </div>
    </v-card>
</div>
</template>

<script>
export default {
  data() {
    return {
      stockQtd: '',
    };
  },
};
</script>

<style>

</style>
