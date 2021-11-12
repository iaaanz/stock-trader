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
      <v-btn text>Finalizar dia</v-btn>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">Salvar/Carregar</v-btn>
        </template>
        <v-list>
          <v-list-item>Salvar</v-list-item>
          <v-list-item>Carregar</v-list-item>
        </v-list>
      </v-menu>
      <v-btn text>Saldo: R$ 1000,00</v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {

};
</script>

<style>

</style>
