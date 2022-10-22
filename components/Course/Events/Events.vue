<template>
  <div class="root">
    <u-animate-container>
      <v-container class="carousel-header">
        <div class="px-3">
          <h5 class="use-text-title">
            <!-- {{ $t("medical.services_title") }} -->
            หลักสูตรอบรม
          </h5>
          <p class="use-text-subtitle2">หลักสูตรอบรม เดือน กันยายน</p>
        </div>
        <v-btn :href="link.medical.product" text class="view-all">
          {{ $t("common.btn_seeall") }}
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
      </v-container>
      <div class="carousel-handle">
        <div v-if="loaded" class="carousel-wrap">
          <slick ref="slick" :options="slickOptions" @afterChange="handleAfterChange">
            <!-- <div class="item">
              <div class="carousel-prop">
                <div />
              </div>
            </div> -->
            <div v-for="(item, index) in courseList" :key="index" class="item">
              <card :data="item" />
            </div>
          </slick>
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
            <nav class="arrow">
              <v-btn fab small aria-label="next" class="margin" @click="next()">
                <v-icon>mdi-arrow-left</v-icon>
              </v-btn>
              <v-btn fab small aria-label="prev" class="margin" @click="prev()">
                <v-icon>mdi-arrow-right</v-icon>
              </v-btn>
            </nav>
          </div>
        </v-container>
      </div>
    </u-animate-container>
  </div>
</template>

<style lang="scss" scoped>
@import "./events-style.scss";
</style>

<script>
import imgAPI from "~/static/images/imgAPI";
import link from "~/static/text/link";
import Card from "../../Cards/CourseCard";
import SliderArt from "../SliderArt";


export default {
  components: {
    Card,
    SliderArt,
    Slick: () => import("vue-slick"),
  },
  data() {
    return {
      loaded: false,
      imgAPI: imgAPI,
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
      courseList: [
        {
          title: 'ขอรับใบอนุญาตเป็นนายหน้าประกันวินาศภัย',
          desc:
            'ทีไอไอ สถาบันประกันภัยไทย',
          img: 'https://tasksquadhq.com/wp-content/uploads/2020/04/staff-training-1024x684.jpg',
          time: '15 ',
          price: '999',
          unit: 'ชม',
          startdate: '1 พ.ย. 2565',
          enddate: '30 ม.ค. 2566',
          sponser: 'https://scontent.furt1-1.fna.fbcdn.net/v/t39.30808-6/305915359_511516584208310_2600063364391843039_n.png?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFd9PJDQkkx_w7Iko3J8ffVppncRjEEdnammdxGMQR2dhPmhrBEhtYHfdVSWwS0ftb0vJJHuaz6erbxYPwFOtC7&_nc_ohc=gtXIJdyX8REAX8Ot9tt&_nc_ht=scontent.furt1-1.fna&oh=00_AT8ZDDw89t4BurMv--za5S2JhCtV02Ez88fwugwzOgcC_A&oe=6358241F'
        },
        {
          title: 'การขอรับใบอนุญาตเป็นตัวแทนประกันชีวิต',
          desc:
            'ภาพรวมของธุรกิจประกันชีวิต และสรุปสาระสำคัญของการประกันชีวิต',
          img: 'data:image/jpeg;base64,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',
          time: '15 ',
          price: '870',
          unit: 'ชม',
          startdate: '1 พ.ย. 2565',
          enddate: '30 ม.ค. 2566',
          sponser: 'https://scontent.furt1-1.fna.fbcdn.net/v/t39.30808-6/305915359_511516584208310_2600063364391843039_n.png?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFd9PJDQkkx_w7Iko3J8ffVppncRjEEdnammdxGMQR2dhPmhrBEhtYHfdVSWwS0ftb0vJJHuaz6erbxYPwFOtC7&_nc_ohc=gtXIJdyX8REAX8Ot9tt&_nc_ht=scontent.furt1-1.fna&oh=00_AT8ZDDw89t4BurMv--za5S2JhCtV02Ez88fwugwzOgcC_A&oe=6358241F'
        },
      ],
    };
  },
  created() {
  },
  mounted() {
    this.loaded = true;
  },
  methods: {
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
  },
};
</script>
