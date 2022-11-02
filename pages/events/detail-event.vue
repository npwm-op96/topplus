<template>
  <div class="main-wrap">
    <main-header :header="'Academy'" :dataMenu="dataMenu" />
    <div class="container-general container-front">
      <v-container>
        <v-row>
          <v-col md="8" cols="12">
            <gallery />
            <!-- <article-blog /> -->
          </v-col>
          <v-col md="4" cols="12">
            <!-- <sidebar /> -->
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
@import "~/assets/pages";
</style>

<script>
import menu from "~/components/Header/data/course";
import brand from "~/static/text/brand";
import MenuHeader from "~/components/Header/MenuHeader";
import Article from "~/components/Blog/Article";
// import Sidebar from '~/components/Blog/Sidebar'
import Footer from "~/components/Footer";
import GalleryVue from "~/components/Gallery";

export default {
  components: {
    "main-header": MenuHeader,
    "main-footer": Footer,
    // Sidebar,
    "article-blog": Article,
    gallery: GalleryVue,
  },
  data() {
    return {
      dataMenu: menu,
    };
  },
  head() {
    return {
      title: "Blog Detail | " + brand.medical.desc,
    };
  },
  created() {
    const data = this.$route.params.data;
    console.log("get params", data);
    // if (!data) {
    //   this.$router.push({ name: 'error', })
    // }
  },
};
</script>
