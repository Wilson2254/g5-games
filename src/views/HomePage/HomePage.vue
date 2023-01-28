<template>
  <div class="home-page">
    <slider-images />
  </div>
</template>

<script>
import SliderImages from '../../components/SliderImages/SliderImages.vue'

export default {
  name: 'HomePage',
  components: {
    SliderImages,
  },
}
</script>
<style lang="scss" src="./HomePage.scss" />
