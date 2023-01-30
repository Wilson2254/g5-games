<template>
  <div class="home-page">
    <slider-images :slider-items="imagesList" />
    <product-container :product-list="productListData" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

// components
import SliderImages from '../../components/SliderImages/SliderImages.vue'
import ProductContainer from '../../components/ProductsContainer/ProductsContainer.vue'

// utilits
import { checkFileType } from '../../utils/fileTypeChecker'
import { cookieGet, cookieSet } from '../../utils/cookieManipulation'
import { getLocalItem } from '../../utils/localStorage'

// api
import { fetchSliderImages } from '../../api/resources/images'

// constans
import { SLIDER_IMAGES_LIMIT } from '../../constans/index'

export default {
  name: 'HomePage',
  components: {
    SliderImages,
    ProductContainer,
  },
  data() {
    return {
      imagesList: [],
      productsListInit: [],
    }
  },
  computed: {
    ...mapGetters({
      productsListStore: 'productsData/productsList',
    }),
    productListData() {
      if (this.productsListStore.length) {
        return this.productsListStore
      }
      return this.productsListInit
    },
  },
  created() {
    this.fillImageList()
    this.getProducts()
  },
  methods: {
    ...mapActions({
      fetchProductList: 'productsData/fetchProductList',
    }),
    async getSliderImage() {
      const { url } = await fetchSliderImages()
      return url
    },
    async fillImageList() {
      const imagesFromCookie = cookieGet('slider-images')

      if (imagesFromCookie) {
        this.imagesList = JSON.parse(imagesFromCookie)
        return
      }

      while (this.imagesList.length !== SLIDER_IMAGES_LIMIT) {
        const imageURL = await this.getSliderImage()

        if (checkFileType(imageURL)) {
          this.imagesList.push(imageURL)
        }
      }
      const cookieImage = JSON.stringify(this.imagesList)
      cookieSet('slider-images', cookieImage, 300)
    },
    async getProducts() {
      const localStorageProducts = getLocalItem('productList')
      if (localStorageProducts) {
        this.productsListInit = localStorageProducts
        return
      }
      await this.fetchProductList()
    },
  },
}
</script>
<style scoped lang="scss" src="./HomePage.scss" />
