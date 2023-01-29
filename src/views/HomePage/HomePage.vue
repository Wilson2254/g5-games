<template>
  <div class="home-page">
    <slider-images
      :slider-items="imagesList"
      :is-slider-loading="imagesSliderLoading"
    />
    <product-container :product-list="productList" />
  </div>
</template>

<script>
// components
import SliderImages from '../../components/SliderImages/SliderImages.vue'
import ProductContainer from '../../components/ProductsContainer/ProductsContainer.vue'

// utilits
import { checkFileType } from '../../utils/fileTypeChecker'
import { cookieGet, cookieSet } from '../../utils/cookieManipulation'
import { getLocalItem, setLocalItem } from '../../utils/localStorage'

// api
import { fetchSliderImages } from '../../api/resources/images'
import { fetchProducts } from '../../api/resources/products'

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
      imagesSliderLoading: true,
      productList: [],
    }
  },
  created() {
    this.fillImageList()
    this.getProducts()
  },
  methods: {
    async getSliderImage() {
      const { url } = await fetchSliderImages()
      return url
    },
    async fillImageList() {
      const imagesFromCookie = cookieGet('slider-images')

      if (imagesFromCookie) {
        this.imagesList = JSON.parse(imagesFromCookie)
        this.imagesSliderLoading = false
        return
      }

      while (this.imagesList.length !== SLIDER_IMAGES_LIMIT) {
        const imageURL = await this.getSliderImage()

        if (checkFileType(imageURL)) {
          this.imagesSliderLoading = false
          this.imagesList.push(imageURL)
        }
      }
      const cookieImage = JSON.stringify(this.imagesList)
      cookieSet('slider-images', cookieImage, 300)
    },
    async getProducts() {
      const localStorageProducts = getLocalItem('productList')
      if (localStorageProducts) {
        this.productList = localStorageProducts
        return
      }
      const { products: responseProductList } = await fetchProducts()
      setLocalItem('productList', responseProductList)
    },
  },
}
</script>
<style scoped lang="scss" src="./HomePage.scss" />
