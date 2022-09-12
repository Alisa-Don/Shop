<template>
  <div id="app">
    <router-view></router-view>
    <nav-bar />
  </div>
</template>

<script>
import navBar from '@/components/navbar.vue'

export default {
  name: 'App',
  components: { navBar },
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
