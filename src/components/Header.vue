<template>
  <v-app-bar app>
    <v-toolbar-title>Traders de Elite</v-toolbar-title>

    <v-toolbar-items class="ml-4">
      <v-btn text to='/'>Home</v-btn>
      <v-btn text to='/portfolio'>Portfolio</v-btn>
      <v-btn text to='/stocks'>Ações</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn @click="endDay" text>Finalizar dia</v-btn>
      <v-btn text>Saldo: R$ {{ saldo || '0.00' }}</v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    endDay() {
      return this.$store.dispatch('endDay');
    },
  },
  computed: {
    saldo() {
      return this.$store.getters.getSaldo.toFixed(2);
    },
  },
};
</script>

<style>

</style>
