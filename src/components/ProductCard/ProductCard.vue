<template>
  <div class="product-card">
    <div class="product-card__wrapper">
      <div class="product-card__image-wrapper">
        <label-component
          v-if="cardLabel"
          :label-name="cardLabel.name"
          :label-color="cardLabel.color"
          :label-style:="cardLabel.positionClass"
        />
        <img
          class="product-card__image"
          :src="cardImage"
          :alt="cardName"
          loading="lazy"
        />
      </div>
      <div class="product-card__element-wrapper product-card__brand">
        <span class="product-card__title-element bold">Brand: </span>
        <span class="product-card__value-element">{{ cardBrand }} </span>
      </div>
      <div class="product-card__element-wrapper product-card__category">
        <span class="product-card__title-element bold">Category: </span>
        <span class="product-card__value-element">{{ cardCategory }} </span>
      </div>
      <div class="product-card__element-wrapper product-card__description">
        <span class="product-card__title-element bold">Description: </span>
        <span class="product-card__value-element">{{ cardDescription }} </span>
      </div>
      <div class="product-card__element-wrapper product-card__stock">
        <span class="product-card__title-element bold">In stock: </span>
        <transition name="flash" mode="out-in">
          <span
            :key="inStock"
            class="product-card__value-element"
            :class="{ 'out-of': !inStock }"
          >
            {{ inStock }}
          </span>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import LabelComponent from '../../widgets/LabelComponent/LabelComponent.vue'

export default {
  name: 'ProductCard',
  components: {
    LabelComponent,
  },
  props: {
    cardBrand: {
      type: String,
      default: 'Not available',
    },
    cardCategory: {
      type: String,
      default: 'Not available',
    },
    cardDescription: {
      type: String,
      default: 'Not available',
    },
    stockCount: {
      type: Number,
      default: 0,
    },
    cardImage: {
      type: String,
      default: 'https://via.placeholder.com/300',
    },
    cardName: {
      type: String,
      default: 'Not available',
    },
    cardLabel: {
      type: Object,
      default: () => ({
        name: '',
        color: '',
        positionClass: '',
      }),
    },
  },
  data() {
    return {
      timerValue: null,
      inStock: this.stockCount,
    }
  },
  computed: {
    randomInterval() {
      return Math.floor(Math.random() * (5 - 1) + 1) * 1000
    },
  },
  created() {
    this.setupTimer()
  },
  beforeDestroy() {
    clearInterval(this.timerValue)
  },
  methods: {
    setupTimer() {
      this.timerValue = setInterval(() => {
        if (this.inStock <= 0) {
          clearInterval(this.timerValue)
        } else {
          this.inStock -= 1
        }
      }, this.randomInterval)
    },
  },
}
</script>

<style scoped lang="scss" src="./ProductCard.scss" />
