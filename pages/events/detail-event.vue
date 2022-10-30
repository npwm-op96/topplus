<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-general container-front">
      <v-container>
        <v-row>
          <v-col md="8" cols="12">
            <article-blog />
          </v-col>
          <v-col md="4" cols="12">
            <sidebar />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div id="footer">
      <main-footer />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/pages';
</style>

<script>
import brand from '~/static/text/brand'
import MenuHeader from '~/components/Header/MenuHeader'
import Article from '~/components/Blog/Article'
// import Sidebar from '~/components/Blog/Sidebar'
import Footer from '~/components/Footer'

export default {
  components: {
    'main-header': MenuHeader,
    'main-footer': Footer,
    // Sidebar,
    'article-blog': Article
  },
  head() {
    return {
      title: 'Blog Detail | ' + brand.medical.desc
    }
  }
}
</script>
