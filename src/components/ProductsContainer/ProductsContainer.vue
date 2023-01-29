<template>
  <div class="products-container">
    <product-card
      v-for="{
        id,
        brand,
        category,
        description,
        stock,
        thumbnail,
        title,
      } in productList"
      :key="id"
      :card-brand="brand"
      :card-category="category"
      :card-description="description"
      :stock-count="stock"
      :card-image="thumbnail"
      :card-name="title"
    />
  </div>
</template>

<script>
import ProductCard from '../ProductCard/ProductCard.vue'

export default {
  name: 'ProductsContainer',
  components: { ProductCard },
  props: {
    productList: {
      type: Array,
      default: () => [],
    },
  },
  component: {
    ProductCard,
  },
}
</script>
<style scoped lang="scss" src="./ProductsContainer.scss" />
