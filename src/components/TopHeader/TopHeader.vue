<template>
  <div class="top-header">
    <div class="top-header__wrapper">
      <header-logo />
      <button-component @click.native="updateProductList" />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import HeaderLogo from '../../assets/images/Logo.svg'
import ButtonComponent from '../../widgets/ButtonComponent/ButtonComponent.vue'

export default {
  name: 'TopHeader',
  components: {
    HeaderLogo,
    ButtonComponent,
  },
  methods: {
    ...mapActions({
      fetchProductList: 'productsData/fetchProductList',
    }),
    async updateProductList() {
      await this.fetchProductList()
    },
  },
}
</script>

<style scoped lang="scss" src="./TopHeader.scss" />
