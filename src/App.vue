<template>
	<v-app>
    <Header />
    <v-content>
      <div class="container-fluid">
         <router-view></router-view>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: { Header },

}
</script>

<style>

</style>

