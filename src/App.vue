<template>
  <div id="app">
    <router-view></router-view>
    <nav-bar v-if="showNavBar" />
  </div>
</template>

<script>
import navBar from '@/components/navbar.vue'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: { navBar },
  computed: {
    ...mapState(['showNavBar']),
  },
}
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>
