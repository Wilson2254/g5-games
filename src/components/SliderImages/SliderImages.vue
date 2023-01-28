<template>
  <div class="slider-images">
    <swiper>
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
    </swiper>
  </div>
</template>

<script>
import Swiper from 'swiper'

export default {
  name: 'SliderImages',
  components: {
    Swiper,
  },
}
</script>
