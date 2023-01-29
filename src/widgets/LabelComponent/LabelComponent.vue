<template>
  <div
    class="label"
    :style="{ backgroundColor: labelColor }"
    :class="labelStyle"
  >
    {{ labelName }}
  </div>
</template>

<script>
export default {
  name: 'LabelComponent',
  props: {
    labelName: {
      type: String,
      default: '',
    },
    labelColor: {
      type: String,
      default: '',
    },
    labelStyle: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped lang="scss" src="./LabelComponent.scss" />
