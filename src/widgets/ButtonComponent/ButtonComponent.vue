<template>
  <button class="button" :aria-label="labelHelper">{{ btnText }}</button>
</template>
<script>
export default {
  name: 'ButtonComponent',
  props: {
    btnText: {
      type: String,
      default: '',
    },
    labelHelper: {
      type: String,
      default: '',
    },
  },
}
</script>
<style scoped lang="scss" src="./ButtonComponent.scss" />
