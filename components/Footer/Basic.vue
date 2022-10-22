<template>
  <footer class="footer">
    <decoration />
    <v-container class="max-lg">
      <nav>
        <ul>
          <li
            v-for="(item, index) in menu"
            :key="index"
          >
            <a :href="'#' + item">
              {{ $t('medical.header_'+item) }}
            </a>
          </li>
        </ul>
      </nav>
      <div class="socmed">
        <v-btn icon name="twitter" class="icon">
          <i class="ion-logo-twitter" />
        </v-btn>
        <v-btn icon name="facebook" class="icon">
          <i class="ion-logo-facebook" />
        </v-btn>
        <v-btn icon  name="instagram" class="icon">
          <i class="ion-logo-instagram" />
        </v-btn>
      </div>
    </v-container>
    <div class="copyright">
      <p class="body-2 text-center">
        &copy;
        {{ brand.medical.footerText }}
      </p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import './footer-basic';
</style>

<script>
import brand from '~/static/text/brand'
import menu from '../Header/data/single'
import Decoration from './Decoration'

export default {
  components: {
    Decoration
  },
  data: () => ({
    brand: brand,
    menu: menu
  })
}
</script>
