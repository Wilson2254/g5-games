<template>
  <div
    class="slider-images"
    :class="{ 'slider-images--loading': isSliderLoading }"
  >
    <div class="slider-images__wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide
          v-for="(item, index) in sliderItems"
          :key="index"
          class="slider-images__item"
        >
          <img
            class="slider-images__item-img"
            loading="lazy"
            :src="item"
            :alt="`Изображение собаки ${index + 1}`"
          />
        </swiper-slide>
      </swiper>
      <div class="slider-images__navigation-wrapper-item prev">
        <span class="arrow" />
      </div>
      <div class="slider-images__navigation-wrapper-item next">
        <span class="arrow" />
      </div>
    </div>
    <div class="slider-images__pagination"></div>
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
    isSliderLoading: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      swiperOptions: {
        spaceBetween: 30,
        slidesPerView: 1,
        slidesPerGroup: 1,
        lazy: true,
        navigation: {
          nextEl: `.slider-images__navigation-wrapper-item.next`,
          prevEl: `.slider-images__navigation-wrapper-item.prev`,
        },
        pagination: {
          el: '.slider-images__pagination',
          type: 'bullets',
          clickable: true,
        },
        breakpoints: {
          1440: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        },
      },
    }
  },
}
</script>

<style scoped lang="scss" src="./SliderImages.scss" />
