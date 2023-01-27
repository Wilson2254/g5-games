<template>
  <div id="app">
    <top-header />
    <router-view />
  </div>
</template>

<script>
import TopHeader from './components/TopHeader/TopHeader.vue'

export default {
  name: 'App',
  components: { TopHeader },
}
</script>
