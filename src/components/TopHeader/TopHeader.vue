<template>
  <div class="top-header">
    <div class="top-header__wrapper">
      <header-logo />
      <button-component />
    </div>
  </div>
</template>

<script>
import HeaderLogo from '../../assets/Logo.svg'
import ButtonComponent from '../../widgets/ButtonComponent/ButtonComponent.vue'

export default {
  name: 'TopHeader',
  components: {
    HeaderLogo,
    ButtonComponent,
  },
}
</script>

<style scoped lang="scss" src="./TopHeader.scss" />
