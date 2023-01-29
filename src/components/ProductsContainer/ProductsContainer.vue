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
        label,
      } in productListWithLabels"
      :key="id"
      :card-brand="brand"
      :card-category="category"
      :card-description="description"
      :stock-count="stock"
      :card-image="thumbnail"
      :card-name="title"
      :card-label="label"
    />
  </div>
</template>

<script>
const ProductCard = () =>
  import(/* webpackChunkName: "ProductCard" */ '../ProductCard/ProductCard.vue')

export default {
  name: 'ProductsContainer',
  components: { ProductCard },
  props: {
    productList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      labelsData: [
        { name: 'TOP', color: '#043563', positionClass: 'top left' },
        { name: 'SALE', color: '#fc4503', positionClass: 'top center' },
        { name: 'POPULAR', color: '#1c943a', positionClass: 'bottom right' },
      ],
    }
  },
  component: {
    ProductCard,
  },
  computed: {
    productListWithLabels() {
      const result = []
      this.productList.forEach((item, index) => {
        result.push(item)
        if (this.labelsData[index]) {
          result[index].label = this.labelsData[index]
        }
      })
      return result
    },
  },
}
</script>
<style scoped lang="scss" src="./ProductsContainer.scss" />
