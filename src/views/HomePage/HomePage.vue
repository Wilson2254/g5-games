<template>
  <div class="home-page">
    <slider-images :slider-items="imagesList" />
  </div>
</template>

<script>
import SliderImages from '../../components/SliderImages/SliderImages.vue'
import { fetchSliderImages } from '../../api/resources/images'
import { checkFileType } from '../../utils/fileTypeChecker'
import { SLIDER_IMAGES_LIMIT } from '../../constans/index'
import { cookieGet, cookieSet } from '../../utils/cookieManipulation'

export default {
  name: 'HomePage',
  components: {
    SliderImages,
  },
  data() {
    return {
      imagesList: [],
    }
  },
  created() {
    this.fillImageList()
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
  },
}
</script>
<style lang="scss" src="./HomePage.scss" />
