<template>
  <div class="top-header">
    <div class="top-header__wrapper">
      <header-logo />
    </div>
  </div>
</template>

<script>
import HeaderLogo from '../../assets/Logo.svg'

export default {
  name: 'TopHeader',
  components: {
    HeaderLogo,
  },
}
</script>

<style scoped lang="scss" src="./TopHeader.scss" />
