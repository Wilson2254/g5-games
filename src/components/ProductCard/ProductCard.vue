<template>
  <div class="product-card">
    <div class="product-card__wrapper">
      <img class="product-card__image" :src="cardImage" :alt="cardName" />
      <div class="product-card__brand">
        <span class="product-card__brand-title">Brand: </span>
        <span class="product-card__brand-value">{{ cardBrand }} </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
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
  },
}
</script>
