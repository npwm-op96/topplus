<template>
  <span :class="type" class="logo">
    <img :src="logo" alt="logo" />
    {{ title!='default' ? title : brand.medical.name}}
    <!-- {{ type !== 'only' ? brand.medical.name : '' }} -->
  </span>
</template>

<style scoped lang="scss">
@import './logo-style.scss';
</style>

<script>
import logo from '~/static/images/D4U/LOGO-logo.png'
import brand from '~/static/text/brand'

export default {
  data() {
    return {
      brand: brand,
      logo: logo
    }
  },
  props: {
    type: {
      type: String,
      default: 'only'
    },
    title:{
      type:String,
      default: 'default'

    }
  }
}
</script>
