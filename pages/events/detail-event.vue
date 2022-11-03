<template>
  <div class="main-wrap">
    <main-header :header="'กิจกรรม'" :dataMenu="dataMenu" />
    <div class="title-bar">
      <hidden point="xsDown">
        <!-- {{data}} -->
        <sub-header :data="{ 'title': data.title, 'desc': data.desc }"></sub-header>
      </hidden>
      <div class="container-general container-front">
        <div class="row">
        </div>
        <v-container>
          <v-row>
            <v-col md="8" cols="12">
              <h4>
                <v-chip color="primary">บรรยากาศภานในกิจกรรม</v-chip>
              </h4><br />
              <gallery />
              <!-- <article-blog /> -->
              <div class="comment pt-5">
                <h3 class="subtitle pb-2">{{ $t('common.blog_write') }}</h3>
                <comment-form @comment="sendComment($event)" avatar="/images/avatars/pp_boy2.svg" />
                <v-list class="comments" three-line>
                  <comment-item v-for="(item, index) in comments" :key="index" :avatar="item.avatar" :name="item.name"
                    :date="item.date" :comment="item.comment" :last="index >= comments.length - 1" />
                </v-list>
              </div>
            </v-col>
            <v-col md="4" cols="12">
              <!-- <sidebar /> -->
            </v-col>
          </v-row>
        </v-container>
      </div>
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
import Form from '~/components/Comment/Form'
import Item from '~/components/Comment/Item'
import SubHeader from "~/components/SubHeader";
import Hidden from '~/components/Hidden'



export default {
  components: {
    "main-header": MenuHeader,
    "main-footer": Footer,
    // Sidebar,
    "article-blog": Article,
    'comment-item': Item,
    'comment-form': Form,
    'sub-header': SubHeader,
    'gallery': GalleryVue,
    'hidden': Hidden
  },
  data() {
    return {
      dataMenu: [],
      comments: [
        {
          name: 'กิตติ',
          avatar: '/images/avatars/pp_boy4.svg',
          date: '13 ตุลคม 2565',
          comment:
            'เป็นการประชุมที่ดูพลังงานมากเลยครับ'
        },
      ],
      data: {}
    };
  },
  head() {
    return {
      title: "Events Detail | " + brand.medical.desc,
    };
  },
  beforeCreate() {

  },
  created() {
    this.data = this.$route.params.data;
    console.log("get params", this.data);
    if (!this.data) {
      this.$router.push({ name: 'events' })
    }
  },
  methods: {
    sendComment(data) {
      console.log('sendComment', data)
      this.comments.push(data)
    }
  },
};
</script>
