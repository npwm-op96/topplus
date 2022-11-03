<template>
  <div class="main-wrap">
    <main-header :header="'Academy'" :dataMenu="dataMenu" />
    <div class="title-bar">
      <hidden point="xsDown">
        <!-- {{data}} -->
        <sub-header :data="{  title:  'กิจกรรมทั้งหมด',  data:  {}  }"></sub-header>
      </hidden>
      <div class="container-general container-front">
        <div class="root">
          <!-- {{ $t("medical.services_title") }} -->

          <div v-for="(items, index) in eventsList" :key="index" class="item">
            <u-animate-container>
              <v-container class="carousel-header">
                <div class="px-3">
                  <h4 class="use-text-title"></h4>
                  <p class="use-text-subtitle2">
                    <v-chip color="primary"> เดือน {{ getNameMonth(items.month) }}</v-chip>
                  </p>
                </div>
                <v-btn @click="onPage()" text class="view-all">
                  {{ $t("common.btn_seeall") }}
                  <v-icon>mdi-arrow-right</v-icon>
                </v-btn>
              </v-container>
              <div class="carousel-handle">
                <div v-if="loaded" class="carousel-wrap">
                  <slick ref="slick" :options="slickOptions" @afterChange="handleAfterChange">
                    <div class="item">
                      <div class="carousel-prop">
                        <div />
                      </div>
                    </div>
                    <div v-for="(item, index) in items.events" :key="index">
                      <!-- <pre> -->
                      <!-- {{ item }} -->
                      <!-- </pre> -->
                      <!-- <div v-for="(item, index) in courseList" :key="index" class="item"> -->
                      <card :data="item" />
                    </div>
                  </slick>
                  <!-- </div> -->
                </div>
              </div>
              <div class="floating-artwork">
                <v-container class="fixed-width">
                  <div class="artwork">
                    <slider-art :fade="fade">
                      <u-animate :offset="250" name="fadeInLeftShort" delay="0.3s" duration="0.5s">
                        <div>
                          <img :src="imgAPI.medical[13]" :data-2d="imgAPI.medical[12]" :data-3d="imgAPI.medical[13]"
                            class="img-2d3d" alt="facilities" />
                        </div>
                      </u-animate>
                    </slider-art>
                    <!-- <nav class="arrow">
                <v-btn
                  fab
                  small
                  aria-label="next"
                  class="margin"
                  @click="next()"
                >
                  <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
                <v-btn
                  fab
                  small
                  aria-label="prev"
                  class="margin"
                  @click="prev()"
                >
                  <v-icon>mdi-arrow-right</v-icon>
                </v-btn>
              </nav> -->
                  </div>
                </v-container>
              </div>
            </u-animate-container>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/pages";

@import "./events-style.scss";
</style>

<script>
import MenuHeader from "~/components/Header/MenuHeader";
import Headline from "~/components/Course/Headline";
import Footer from "~/components/Footer";
import imgAPI from "~/static/images/imgAPI";
import link from "~/static/text/link";
import Card from "~/components/Cards/EventCard";
import SliderArt from "~/components/SliderArt";
import events from "~/static/api/events.js";
import { GET_EVENTS_ALL } from "~/services/api/events.js";
// import Mevents from "~/modules/events/index.js"
import { Mevent } from "../../modules/events/index.js";
import menu from '~/components/Header/data/course'
import SubHeader from "~/components/SubHeader";
import Hidden from '~/components/Hidden'

const { GetEvent, SetEvent } = Mevent();

export default {
  components: {
    "main-header": MenuHeader,
    "main-footer": Footer,
    'sub-header': SubHeader,
    'hidden': Hidden,
    Card,
    SliderArt,
    Slick: () => import("vue-slick"),
  },
  data() {
    return {
      monthNamesThai: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุมนายน",
        "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤษจิกายน", "ธันวาคม"],
      dataMenu: [],
      imgAPI: imgAPI,
      loaded: false,
      link: link,
      fade: false,
      slickOptions: {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        arrows: false,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      },
      eventsList: {},
    };
  },
  created() {
    this.getEvents();
    // Mevents.onint()
  },
  mounted() {
    this.loaded = true;
  },
  methods: {
    getNameMonth(month) {
      return this.monthNamesThai[month]
    },
    onPage() {
      this.$router.push({ name: 'events' })
    },
    next: function () {
      this.$refs.slick.next();
    },
    prev: function () {
      this.$refs.slick.prev();
    },
    handleAfterChange(event, slick, currentSlide) {
      if (currentSlide > 0) {
        this.fade = true;
      } else {
        this.fade = false;
      }
    },
    async getEvents() {
      const Req = {};
      let data = await GET_EVENTS_ALL(Req);

      this.eventsList = await SetEvent(data);
      // console.log("getEvents", events);
    },
  },
};
</script>
