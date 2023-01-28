<template>
  <div class="slider-images">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(item, index) in sliderItems" :key="index">
        <img :src="item" alt="" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'SliderImages',
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    sliderItems: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 3,
      },
    }
  },
}
</script>
