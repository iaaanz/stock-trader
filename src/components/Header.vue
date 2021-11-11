<template>
  <v-toolbar app>
    <v-toolbar-title>Traders de Elite</v-toolbar-title>

    <v-toolbar-items class="ml-4">
      <v-btn flat to='/'>Home</v-btn>
      <v-btn flat to='/portfolio'>Portfolio</v-btn>
      <v-btn flat to='/stocks'>Ações</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat>Finalizar dia</v-btn>

      <v-menu offset-y>
        <v-btn flat slot="activator">Salvar/Carregar</v-btn>
          <v-list flat>
            <v-list-tile>Salvar</v-list-tile>
            <v-list-tile>Carregar</v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {

}
</script>

<style>

</style>